import pickle
import os
from app.utils import clean_text
from datetime import datetime
import json

class SpamDetectorService:
    _instance = None
    model = None
    vectorizer = None
    stats_file = None
    prediction_log = []

    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = cls()
            cls._instance._load_model()
            cls._instance._load_stats()
        return cls._instance

    def _load_model(self):
        """Loads the model and vectorizer from the models directory."""
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        model_path = os.path.join(base_dir, 'models', 'model.pkl')
        vectorizer_path = os.path.join(base_dir, 'models', 'vectorizer.pkl')
        self.stats_file = os.path.join(base_dir, 'models', 'predictions_log.json')

        print(f"Loading models from: {base_dir}")
        try:
            with open(model_path, 'rb') as f:
                self.model = pickle.load(f)
            with open(vectorizer_path, 'rb') as f:
                self.vectorizer = pickle.load(f)
            print(" Models loaded successfully.")
        except FileNotFoundError as e:
            print(f" Error loading models: {e}")
            self.model = None
            self.vectorizer = None

    def _load_stats(self):
        """Load prediction history from file."""
        if self.stats_file and os.path.exists(self.stats_file):
            try:
                with open(self.stats_file, 'r') as f:
                    self.prediction_log = json.load(f)
                print(f" Loaded {len(self.prediction_log)} prediction records")
            except:
                self.prediction_log = []
        else:
            self.prediction_log = []

    def _save_stats(self):
        """Save prediction history to file."""
        if self.stats_file:
            # Keep only last 1000 predictions
            if len(self.prediction_log) > 1000:
                self.prediction_log = self.prediction_log[-1000:]
            with open(self.stats_file, 'w') as f:
                json.dump(self.prediction_log, f)

    def predict(self, message):
        """
        Predicts if a message is spam or ham.
        Returns: Tuple (Label, IsSpamBool)
        """
        if not self.model or not self.vectorizer:
            raise Exception("Model not loaded properly.")

        cleaned_prop = clean_text(message)
        vectorized_text = self.vectorizer.transform([cleaned_prop])
        prediction = self.model.predict(vectorized_text)[0] # 0 or 1
        
        label = "Spam" if prediction == 1 else "Not Spam (Ham)"
        is_spam = bool(prediction == 1)
        
        # Log prediction
        self.prediction_log.append({
            'timestamp': datetime.now().isoformat(),
            'message': message[:100],
            'prediction': label,
            'is_spam': is_spam
        })
        self._save_stats()
        
        return label, is_spam

    def get_statistics(self):
        """Get prediction statistics for dashboard."""
        if not self.prediction_log:
            return {
                'total_predictions': 0,
                'spam_count': 0,
                'ham_count': 0,
                'spam_percentage': 0,
                'ham_percentage': 0,
                'recent_predictions': [],
                'hourly_data': []
            }

        total = len(self.prediction_log)
        spam_count = sum(1 for p in self.prediction_log if p['is_spam'])
        ham_count = total - spam_count

        # Get recent predictions (last 10)
        recent = self.prediction_log[-10:]

        # Calculate hourly predictions
        hourly = {}
        for p in self.prediction_log:
            hour = datetime.fromisoformat(p['timestamp']).strftime('%H:00')
            if hour not in hourly:
                hourly[hour] = {'total': 0, 'spam': 0, 'ham': 0}
            hourly[hour]['total'] += 1
            if p['is_spam']:
                hourly[hour]['spam'] += 1
            else:
                hourly[hour]['ham'] += 1

        # Sort by hour and take last 24 hours
        sorted_hours = sorted(hourly.items())[-24:]

        return {
            'total_predictions': total,
            'spam_count': spam_count,
            'ham_count': ham_count,
            'spam_percentage': round((spam_count / total) * 100, 1),
            'ham_percentage': round((ham_count / total) * 100, 1),
            'recent_predictions': recent,
            'hourly_data': [{'hour': h, **data} for h, data in sorted_hours]
        }
