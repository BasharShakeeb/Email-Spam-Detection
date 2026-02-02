import pickle
import os
from app.utils import clean_text

class SpamDetectorService:
    _instance = None
    model = None
    vectorizer = None

    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = cls()
            cls._instance._load_model()
        return cls._instance

    def _load_model(self):
        """Loads the model and vectorizer from the models directory."""
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        model_path = os.path.join(base_dir, 'models', 'model.pkl')
        vectorizer_path = os.path.join(base_dir, 'models', 'vectorizer.pkl')

        print(f"Loading models from: {base_dir}")
        try:
            with open(model_path, 'rb') as f:
                self.model = pickle.load(f)
            with open(vectorizer_path, 'rb') as f:
                self.vectorizer = pickle.load(f)
            print("✅ Models loaded successfully.")
        except FileNotFoundError as e:
            print(f"❌ Error loading models: {e}")
            self.model = None
            self.vectorizer = None

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
        
        return label, is_spam
