from flask import Blueprint, request, jsonify

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    # Placeholder: send email, store in DB, etc.
    return jsonify({'message': 'Thanks for reaching out — we’ll get back to you shortly.'}), 200

