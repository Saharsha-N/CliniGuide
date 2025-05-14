
import { GoogleGenerativeAI } from "@google/generative-ai";

// This API key should be stored securely in a production environment
// For this POC, we'll use a placeholder that the user will need to replace
const API_KEY = "AIzaSyBFGzpfkPHxCRmEjHKhM97ayxiU9klxfiA";

export async function getGuidance(patientContext: string, clinicianConcern: string): Promise<string> {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
As an AI assistant for mental health counselors, please provide guidance based on the following:

PATIENT CONTEXT:
${patientContext}

CLINICIAN'S CONCERN/QUESTION:
${clinicianConcern}

Please provide evidence-based therapeutic strategies, potential approaches, and considerations that might help the clinician in this specific situation. Focus on practical guidance that can be implemented in a counseling setting.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error generating guidance:", error);
    throw new Error("Failed to generate guidance. Please check your API key and try again.");
  }
}
