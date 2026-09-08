import axios from "axios";
import { graph } from "../graph/graph.js";
export const agents = async (req, res) => {
  try {
    const { prompt, conversationId } = req.body;
    console.log("🔥 Controller prompt:", prompt);
    console.log("🔥 Controller conversationId:", conversationId);
    await axios.post(`${process.env.CHAT_SERVICES_URL}/save-message`, {
      conversationId,
      role: "user",
      content: prompt,
    });

    const result = await graph.invoke({
      prompt,
      conversationId,
    });
    console.log("result:", result);
    const response = result?.aiResponse;
    console.log("response from controler airesponse:", response);
    return res.status(200).json(response);
  } catch (error) {
    console.log("error from agent-chat:", error);
    return res
      .status(500)
      .json({ message: "error from agent controller", error });
  }
};
