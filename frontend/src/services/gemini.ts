import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize with API v1
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const translateToEnglish = async (text: string, lang: string): Promise<string> => {
  if (lang === "en-US") return text;

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = `
You are a translator. Convert the following ${lang === "hi-IN" ? "Hindi" : "Gujarati"} sentence to English:

"${text}"

Respond ONLY with the English translation.
`;
  const result = await model.generateContent(prompt);
  return result.response.text().trim();
};

export const correctTextWithGemini = async (text: string): Promise<string> => {
  if (!text.trim()) return text;

  try {
    // Use the correct model name
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
You are an expert at converting predicted Indian Sign Language (ISL) gestures into natural English. Follow these rules:

1. **Correction Guidelines**:
   - Fix spelling/grammar but preserve the core meaning
   - Expand minimally to form complete sentences
   - Keep the tone conversational
   - Never add unrelated information

2. **Required Transformations**:
   - Single words → Complete sentences
   - Broken phrases → Natural phrasing
   - Letter sequences → Proper words

3. **Examples (Follow Exactly)**:
   - "helo" → "Hello"
   - "go park" → "Let's go to the park."
   - "hungry" → "I am hungry."
   - "nam john" → "My name is John."
   - "wher food" → "Where can I find food?"
   - "thnk u" → "Thank you!"
   - "i lern isl" → "I am learning ISL."
   - "hlp me" → "Can you help me?"
   - "wtr pls" → "Water, please."
   - "happ today" → "I feel happy today."

4. **Critical Rules**:
   - NEVER invent new information not in the original
   - Maximum 1-2 sentence expansions
   - Keep abbreviations like "ISL" as-is
   - Respond ONLY with the corrected text
   - Dont add anything extra like "this is the predicted sign" or any extra details , just provide the corrected text 

Text to process: "${text}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return text; // Fallback to original text
  }
};