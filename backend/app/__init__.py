
from flask import Flask, jsonify
from flask_cors import CORS
from app.routes.contacts import contact_bp
from app.utils.error_handlers import register_error_handlers
from dotenv import load_dotenv
import os

def create_app():

    # Load environment variables from .env file
    base_dir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    dotenv_path = os.path.join(base_dir, '.env')
    load_dotenv(dotenv_path)

    app = Flask(__name__)
    app.secret_key = os.getenv('SECRET_KEY', 'change-me-too')

    CORS(app)  # Allow frontend to call APIs

    @app.route('/')
    def index():
        # Minimal root route to help during local development and avoid 404 JSON from Flask
        return jsonify({
            'message': 'Care backend running',
            'contact': '/contact (POST)'
        })

    # Register contact blueprint at root so the route is available as /contact
    app.register_blueprint(contact_bp)
    register_error_handlers(app)

    return app

