
import os
import smtplib
from email.message import EmailMessage
from flask import Blueprint, request, jsonify

contact_bp = Blueprint('contact', __name__)


@contact_bp.route('/contact', methods=['GET', 'POST'])
def handle_contact():
    # Allow GET for quick checks in browser or health checks
    if request.method == 'GET':
        return jsonify({
            'message': 'Contact endpoint (POST to submit).',
            'fields': ['name', 'email', 'subject', 'message']
        }), 200

    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject', 'Contact Form Submission')
    message = data.get('message')

    # Compose email
    email_body = f"""
    New contact form submission:

    Name: {name}
    Email: {email}
    Subject: {subject}
    Message:
    {message}
    """

    msg = EmailMessage()
    msg['Subject'] = f"[Contact] {subject}"
    msg['From'] = os.getenv('MAIL_FROM', 'noreply@careinourhand.com.au')
    msg['To'] = 'info@careinourhand.com.au'
    msg.set_content(email_body)

    # SMTP config from environment variables
    smtp_host = os.getenv('SMTP_HOST')
    smtp_port = int(os.getenv('SMTP_PORT', 587))
    smtp_user = os.getenv('SMTP_USER')
    smtp_pass = os.getenv('SMTP_PASS')
    use_tls = os.getenv('SMTP_USE_TLS', 'true').lower() == 'true'

    # Allow an administrator to disable real mail sending during testing
    # Set MAIL_ENABLED=false in .env to prevent actual SMTP operations
    mail_enabled = os.getenv('MAIL_ENABLED', 'true').lower() == 'true'

    # Development-safe behavior: when SMTP is not configured, or mail sending is disabled,
    # skip sending email and return a success response so frontend submissions don't error during local dev.
    if not smtp_host or not mail_enabled:
        # Log or return a helpful message for local testing
        note = 'Submission received (email sending skipped in dev).'
        if not mail_enabled:
            note = 'Submission received (email sending disabled via MAIL_ENABLED).'
        return jsonify({'message': note}), 200

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            if use_tls:
                server.starttls()
            if smtp_user and smtp_pass:
                server.login(smtp_user, smtp_pass)
            server.send_message(msg)
        return jsonify({'message': 'Thanks for reaching out — we’ll get back to you shortly.'}), 200
    except Exception as e:
        return jsonify({'error': 'Failed to send email', 'details': str(e)}), 500

