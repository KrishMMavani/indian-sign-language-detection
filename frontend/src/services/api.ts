/**
 * API service for communicating with the backend
 */

const API_URL = 'http://localhost:8000';

export const predictSign = async (imageBase64: string): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageBase64 }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    return data.prediction;
  } catch (error) {
    console.error('Error predicting sign:', error);
    throw error;
  }
};