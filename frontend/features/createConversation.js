import api from "../src/utils/axios";

export const createConversation = async () => {
  try {
    const { data } = await api.post("/api/chat/create-conversation");
    console.log("data from createConversation api -frontend:", data);
    return data;
  } catch (error) {
    console.log("error from createConversation api=frotnend:", error);
    return [];
  }
};
