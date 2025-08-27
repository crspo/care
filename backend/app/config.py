import os

class Config:
    DEBUG = os.getenv('DEBUG', False)
    SECRET_KEY = os.getenv('SECRET_KEY', 'your-secret')
    DB_URI = os.getenv('DB_URI', 'sqlite:///data.db')

