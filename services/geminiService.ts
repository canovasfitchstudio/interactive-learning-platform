
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// IMPORTANT: The API key MUST be available as process.env.API_KEY in the execution environment.
// This code assumes process.env.API_KEY is set.
// Do not add any UI or prompts to enter the API key.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Please set the API_KEY environment variable.");
  // Depending on the app's requirements, you might throw an error here or disable AI features.
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "MISSING_API_KEY" }); // Fallback to prevent crash if key is missing, but functionality will fail.

const model = 'gemini-2.5-flash-preview-04-17';

export const getInterviewFeedback = async (question: string, answer: string): Promise<string> => {
  if (!API_KEY) {
    return "Error: API Key for Gemini is not configured. Please contact support.";
  }
  try {
    const prompt = `
      Question: "${question}"
      User's Answer: "${answer}"

      Provide constructive feedback on the user's answer. Focus on:
      1. Clarity and Conciseness: Is the answer easy to understand and to the point?
      2. Relevance: Does the answer directly address the question?
      3. Impact and Examples: Does the answer effectively showcase skills or experiences, possibly using STAR method?
      4. Confidence and Tone: How does the answer come across?
      5. Areas for Improvement: Specific suggestions to make the answer stronger.

      Format your feedback clearly.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: "You are an expert interview coach providing feedback on interview answers.",
        temperature: 0.7, // Moderately creative but still focused
      }
    });
    
    return response.text;

  } catch (error) {
    console.error("Error getting feedback from Gemini:", error);
    if (error instanceof Error) {
        if (error.message.includes("API key not valid")) {
            return "Error: The provided API key is not valid. Please check your configuration.";
        }
         return `Error communicating with AI service: ${error.message}. Please try again later.`;
    }
    return "An unexpected error occurred while fetching feedback. Please try again later.";
  }
};
