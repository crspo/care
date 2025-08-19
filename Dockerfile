FROM python:3.12-slim

WORKDIR /app

# Install Flask only
RUN pip install --no-cache-dir flask gunicorn

# Copy your app code
COPY . .

# Expose container port
EXPOSE 5000

# Start with Gunicorn for production
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]

