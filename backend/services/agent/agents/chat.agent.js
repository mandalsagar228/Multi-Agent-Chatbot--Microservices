import { getModel } from "../config/llmModels.js";

export const chatAgent = async (state) => {
  const llm = await getModel("chat");

  const systemPrompt = "You are an Autochat Ai, an inteligent ai  assistant";
  const response = await llm.invoke([
    { role: "system", content: systemPrompt },
    {
      role: "human",
      content: state.prompt,
    },
  ]);
  console.log("response from chatagent:", response.content);
  return {
    ...state,
    aiResponse: response?.content,
  };
};
