import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const createConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    console.log("x-user-id:", userId);

    const conversation = await conversation.create({
      userId: userId,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error while creating createConversation", error });
  }
};

export const getConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    const conversation = await Conversation.find({
      userId: userId,
    }).sort({ updatedAt: -1 });
    return res.status(200).json(conversation);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error while getting conversation", error });
  }
};

export const updateConversation = async (req, res) => {
  try {
    const { id, title } = req.body;
    const conversation = await Conversation.findByIdAndUpdate(id, { title });

    return res.status(200).json(conversation);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error while updating message", error });
  }
};

export const saveMessage = async (req, res) => {
  try {
    const { conversationId, role, content } = req.body;
    const message = await Message.create({
      conversationId,
      role,
      content,
    });

    return res.status(200).json(message);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error while saving message", error });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { conversationId } = req.params.conversationId;
    const message = (await Message.find({ conversationId })).sort({
      createdAt: -1,
    });
    return res.status(200).json(message);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error while calling get message", error });
  }
};
