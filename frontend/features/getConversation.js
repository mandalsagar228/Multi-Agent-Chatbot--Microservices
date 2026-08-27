import api from "../src/utils/axios";

export const getConversation = async () => {
  try {
    const { data } = await api.get("/api/chat/get-conversation");
    console.log("data from getConversation api -frontend:", data);
    return data;
  } catch (error) {
    console.log("error from getConversation api=frotnend:", error);
    return [];
  }
};
