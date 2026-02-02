from app import create_app
from app.services import SpamDetectorService

app = create_app()

# Pre-load the model when the app starts (Optional but recommended)
with app.app_context():
    SpamDetectorService.get_instance()

if __name__ == "__main__":
    app.run(debug=True)
