
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (prompt: string, history: { role: string, parts: { text: string }[] }[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: "You are the EAII Virtual Assistant. Your goal is to help Ethiopian citizens understand the Ethiopian Artificial Intelligence Institute (EAII). You support Amharic and English. You are helpful, professional, and patient. If asked about appointments, guide them to the booking portal. If asked about education, mention the Kids and Youth programs.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm having trouble connecting right now. Please try again or visit our support desk.";
  }
};
