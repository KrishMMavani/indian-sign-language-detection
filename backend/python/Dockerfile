# Use lightweight base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install required system dependencies (for cv2, mediapipe, etc.)
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
 && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY requirements.txt .

RUN pip install --upgrade pip \
 && pip install --no-cache-dir -r requirements.txt \
 && pip cache purge

# Copy the rest of the app
COPY . .

# Expose the port (optional; good for documentation)
EXPOSE 8000

# Run the FastAPI app
CMD ["python", "app.py"]
