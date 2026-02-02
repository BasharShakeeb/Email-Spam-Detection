from flask import Blueprint, render_template, request, jsonify
from app.services import SpamDetectorService

# Define Blueprint
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def home():
    """Renders the main page."""
    return render_template('index.html')

@main_bp.route('/predict', methods=['POST'])
def predict():
    """API endpoint to predict spam."""
    try:
        data = request.get_json()
        message = data.get('message', '')

        if not message:
            return jsonify({'error': 'Please enter a message.'}), 400

        # Use the service layer to get prediction
        service = SpamDetectorService.get_instance()
        label, is_spam = service.predict(message)

        return jsonify({
            'message': message,
            'prediction': label,
            'is_spam': is_spam
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500
