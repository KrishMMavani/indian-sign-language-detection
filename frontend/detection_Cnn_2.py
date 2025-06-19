import cv2
import mediapipe as mp
import pyrealsense2 as rs
import numpy as np
import string
import copy
import itertools
from tensorflow import keras

# Set this to 0 for webcam, 1 for RealSense depth camera
USE_DEPTH_CAMERA = 0  # Change to 1 for depth camera

# Load the trained CNN model
model = keras.models.load_model("Islcnn4epoch.h5")

# Initialize Mediapipe Hands model
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_hands = mp.solutions.hands

# Define alphabet labels (1-9 and A-Z)
alphabet = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
alphabet += list(string.ascii_uppercase)

# Function to extract landmark coordinates
def calc_landmark_list(image, landmarks):
    image_width, image_height = image.shape[1], image.shape[0]
    return [[min(int(landmark.x * image_width), image_width - 1),
             min(int(landmark.y * image_height), image_height - 1)]
            for landmark in landmarks.landmark]

# Function to normalize landmark data
def pre_process_landmark(landmark_list):
    base_x, base_y = landmark_list[0]
    temp_landmark_list = [[x - base_x, y - base_y] for x, y in landmark_list]
    temp_landmark_list = np.array(temp_landmark_list).flatten()
    
    max_value = max(abs(temp_landmark_list)) if max(abs(temp_landmark_list)) != 0 else 1
    return (temp_landmark_list / max_value).reshape(1, 21, 2, 1)  # Reshape for CNN

# Initialize camera based on USE_DEPTH_CAMERA flag
if USE_DEPTH_CAMERA == 0:
    cap = cv2.VideoCapture(0)  # Webcam
    def get_frame():
        success, frame = cap.read()
        return cv2.flip(frame, 1) if success else None

elif USE_DEPTH_CAMERA == 1:
    pipeline = rs.pipeline()
    config = rs.config()
    config.enable_stream(rs.stream.color, 640, 480, rs.format.bgr8, 30)
    pipeline.start(config)
    
    def get_frame():
        frames = pipeline.wait_for_frames()
        color_frame = frames.get_color_frame()
        return cv2.flip(np.asanyarray(color_frame.get_data()), 1) if color_frame else None

else:
    print("Invalid camera setting! Exiting...")
    exit()

with mp_hands.Hands(
    model_complexity=0,
    max_num_hands=2,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5) as hands:

    while True:
        image = get_frame()
        if image is None:
            print("Ignoring empty frame.")
            continue

        image.flags.writeable = False
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = hands.process(image_rgb)

        image.flags.writeable = True
        debug_image = copy.deepcopy(image)

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                landmark_list = calc_landmark_list(debug_image, hand_landmarks)
                processed_landmarks = pre_process_landmark(landmark_list)

                predictions = model.predict(processed_landmarks, verbose=0)
                predicted_class = np.argmax(predictions, axis=1)[0]
                label = alphabet[predicted_class]

                cv2.putText(image, label, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.5, (0, 0, 255), 2)
                print(label)

                mp_drawing.draw_landmarks(
                    image, hand_landmarks, mp_hands.HAND_CONNECTIONS,
                    mp_drawing_styles.get_default_hand_landmarks_style(),
                    mp_drawing_styles.get_default_hand_connections_style())

        cv2.imshow('Indian Sign Language Detector', image)
        if cv2.waitKey(5) & 0xFF == 27:  # Press 'Esc' to exit
            break

if USE_DEPTH_CAMERA == 0:
    cap.release()
elif USE_DEPTH_CAMERA == 1:
    pipeline.stop()

cv2.destroyAllWindows()
