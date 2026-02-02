from flask import Flask

def create_app():
    """Application Factory Pattern."""
    app = Flask(__name__)

    # Register Blueprints
    from app.routes import main_bp
    app.register_blueprint(main_bp)

    return app
