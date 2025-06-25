from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import base64
import sys
import os
import cv2
import mediapipe as mp
from tensorflow import keras

# Import your existing detection script
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://indian-sign-language-detection.vercel.app"
]


# Configure CORS to allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Paths to the model files
ALPHANUM_MODEL_PATH = "./model/alnum_tuvwxyzski.h5"
WORD_MODEL_PATH = "./model/wordmodel24.h5"  # Replace with your word model path

# Load both models when the server starts
alphanum_model = keras.models.load_model(ALPHANUM_MODEL_PATH, compile=False)
word_model = keras.models.load_model(WORD_MODEL_PATH, compile=False)

# Initialize Mediapipe Hands model
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=True,  # For image input
    max_num_hands=2,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7
)

# Class labels 
alphabet_subset = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 
                   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
                   'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
                   'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

word_subset =  ['AEROPLANE', 'ALRIGHT', 'CAT', 'CELLPHONE', 'CHAIR', 'COW', 'DOG', 'FISH', 'GOOD',
 'HAIR', 'HAT', 'HELLO', 'HOME', 'I', 'MONDAY', 'NARROW', 'PLEASE', 'QUITE', 'RED',
 'THANKYOU', 'TIME', 'TODAY', 'UNIVERSITY', 'WEDNESDAY', 'YOU']

def calc_landmark_list(image, landmarks):
    """Convert landmarks to image coordinates"""
    image_width, image_height = image.shape[1], image.shape[0]
    return [[min(int(lm.x * image_width), image_width - 1),
             min(int(lm.y * image_height), image_height - 1)] 
            for lm in landmarks.landmark]

def pre_process_landmark(landmark_list):
    """Normalize landmarks"""
    landmarks = np.array(landmark_list, dtype=np.float32)
    landmarks -= landmarks[0]  # Center around wrist
    max_val = np.max(np.abs(landmarks))
    if max_val > 0:
        landmarks /= max_val  # Normalize to [-1,1] range
    return landmarks.reshape(1, 21, 2, 1)  # 4D tensor for CNN

@app.get("/")
async def root():
    return {"message": "Sign Language Detection API"}

@app.post("/predict/alphanum")
async def predict_alphanum(image: str = Body(..., embed=True)):
    """Predict alphabet or number"""
    return await predict_sign(image, alphanum_model, alphabet_subset)

@app.post("/predict/word")
async def predict_word(image: str = Body(..., embed=True)):
    """Predict word"""
    return await predict_sign(image, word_model, word_subset)

async def predict_sign(image: str, model, class_labels):
    """
    Common prediction function for both models
    """
    try:
        # Check if the image is a base64 string
        if "base64," in image:
            image = image.split("base64,")[1]
        
        # Decode the base64 string and convert to image
        image_bytes = base64.b64decode(image)
        np_arr = np.frombuffer(image_bytes, np.uint8)
        image_data = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
        
        # Flip the image horizontally
        image_data = cv2.flip(image_data, 1)
        
        # Convert to RGB for MediaPipe
        image_rgb = cv2.cvtColor(image_data, cv2.COLOR_BGR2RGB)
        
        # Process the image with MediaPipe Hands
        results = hands.process(image_rgb)
        
        # Check if any hands were detected
        if not results.multi_hand_landmarks:
            return {
                "prediction": "No hand detected",
                "confidence": 0.0
            }
        
        # Process each detected hand and return the first prediction
        for hand_landmarks in results.multi_hand_landmarks:
            # Get landmark coordinates
            landmark_list = calc_landmark_list(image_data, hand_landmarks)
            
            # Process landmarks for the CNN
            processed = pre_process_landmark(landmark_list)
            
            # Get prediction
            predictions = model.predict(processed, verbose=0)[0]
            predicted_class = np.argmax(predictions)
            confidence = float(np.max(predictions))
            
            # Return the prediction
            return {
                "prediction": class_labels[predicted_class],
                "confidence": confidence
            }
        
        return {
            "prediction": "Error processing hand landmarks",
            "confidence": 0.0
        }
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            "error": str(e),
            "confidence": 0.0
        }

import os

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
