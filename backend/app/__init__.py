
from flask import Flask
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

    app.register_blueprint(contact_bp, url_prefix='/api')
    register_error_handlers(app)

    return app

