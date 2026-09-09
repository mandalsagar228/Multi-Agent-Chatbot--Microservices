import { getModel } from "../config/llmModels.js";
import { systemPrompt } from "../config/prompt.js";

export const chatAgent = async (state) => {
  const llm = await getModel("chat");

  const systemPrompts = systemPrompt.format;
  const response = await llm.invoke([
    { role: "system", content: systemPrompts },
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
