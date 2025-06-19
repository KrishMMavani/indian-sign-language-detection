import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI with the API key from the environment variable
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const generateContent = async (prompt: string): Promise<string> => {
  try {
    // Call the Gemini API to generate content
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Specify the model
      contents: prompt, // Pass the user prompt
    });

    // Return the generated text
    return response.text ?? "Sorry, no response generated.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I'm having trouble responding right now.";
  }
};