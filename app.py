from flask import Flask, render_template, request, jsonify
import pickle
import re

app = Flask(__name__)

# Load Model and Vectorizer
print("Loading model and vectorizer...")
try:
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
    with open('vectorizer.pkl', 'rb') as f:
        vectorizer = pickle.load(f)
    print("Model loaded successfully!")
except FileNotFoundError:
    print("Error: Model files not found. Please run export_model.py first.")
    model = None
    vectorizer = None

def clean_text(text):
    text = text.lower()
    text = re.sub(r'http\S+', 'url', text)
    text = re.sub(r'\d+', 'number', text)
    text = re.sub(r'[^a-z\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if not model or not vectorizer:
        return jsonify({'error': 'Model not loaded'}), 500

    try:
        data = request.get_json()
        message = data.get('message', '')

        if not message:
            return jsonify({'error': 'Empty message'}), 400

        # Preprocess
        cleaned_message = clean_text(message)
        
        # Vectorize
        vectorized_message = vectorizer.transform([cleaned_message])
        
        # Predict
        prediction = model.predict(vectorized_message)[0] # 0 or 1
        result = "Spam" if prediction == 1 else "Not Spam (Ham)"
        
        return jsonify({'prediction': result, 'message': message})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
