import axios from "axios";
import { graph } from "../graph/graph.js";
export const agents = async (req, res) => {
  try {
    const { prompts, conversationId } = req.body;
    await axios.post(`${process.env.CHAT_SERVICES_URL}/save-message`, {
      conversationId,
      role: "user",
      content: prompts,
    });

    const result = await graph.invoke({
      prompt,
      conversationId,
    });
    const response = result.airesponse;
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error from agent controller", error });
  }
};
