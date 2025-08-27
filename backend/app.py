# app.py
from flask import Flask, render_template, flash, redirect, url_for, request

def create_app():
    app = Flask(__name__)
    app.secret_key = "change-me too"
    
    @app.route("/")
    def index():
            # Example flash to demonstrate alert macro:
            # flash("Welcome! Your appointment is confirmed for Thursday.", "success")
            return render_template("index.html")
        
    @app.route("/about")
    def about():
            return render_template("about.html")
    
    @app.route("/services")
    def services():
            return render_template("services.html")
        
    @app.route("/contact", methods=["GET", "POST"])
    def contact():
        if request.method == "POST":
            name = request.form.get("name")
            email = request.form.get("email")
            subject = request.form.get("subject")
            message = request.form.get("message")

            # Placeholder: send email, store in DB, etc.
            flash("Thanks for reaching out — we'll get back to you shortly.", "success")
            return redirect(url_for("contact"))
        return render_template("contact.html")
    
    return app
app = create_app()  
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
