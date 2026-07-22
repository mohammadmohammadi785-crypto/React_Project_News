import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function GetLatestNews() {
  const data = await ai.interactions.create({
    generation_config: {},
    model: "gemini-2.5-flash",
    input:
      "Give me the latest news about afghanistan witch contains one image, title, body and date in json format",
  });
  return data;
}
