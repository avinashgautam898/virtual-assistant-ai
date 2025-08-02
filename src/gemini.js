let api_key = "AIzaSyAXr0zlru3z1YQW86kauXi-KDmWj21dTYI";
import { GoogleGenerativeAI} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(api_key);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 50,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt)
  return result.response.text();
}

export default run;
