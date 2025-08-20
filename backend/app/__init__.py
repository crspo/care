from flask import Flask
from flask_cors import CORS
from app.routes.contact import contact_bp
from app.utils.error_handlers import register_error_handlers

def create_app():
    app = Flask(__name__)
    app.secret_key = "change-me-too"

    CORS(app)  # Allow frontend to call APIs

    app.register_blueprint(contact_bp, url_prefix='/api')
    register_error_handlers(app)

    return app

