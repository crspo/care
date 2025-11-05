Care — frontend + backend

Overview
---------
This repository contains a small React + Vite frontend and a Flask backend (simple contact form API).

Quick start
-----------
Prerequisites:
- Node.js (16+)
- Python 3.10+ and pip

Backend
-------
1. Change to the backend directory:

   cd backend

2. Install Python dependencies:

   python -m pip install -r requirements.txt

3. Copy or create a `.env` file in `backend/` with SMTP settings (if you want emails to send). Example keys:

   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=you@example.com
   SMTP_PASS=yourpassword
   SMTP_USE_TLS=true
   MAIL_FROM=noreply@example.com
   MAIL_ENABLED=false

4. Run the backend (development server):

   # from repo root
   Set-Location -Path './backend'
   $env:FLASK_APP='wsgi'
   python -m flask run --host=127.0.0.1 --port=5000

Frontend
--------
1. Change to frontend directory and install deps:

   cd frontend
   npm install

2. Run dev server:

   npm run dev

3. Run jsdom tests (headless unit tests):

   npm run test:jsdom



