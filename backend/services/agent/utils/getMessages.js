import axios from "axios";
export const getMessages = async (conversationId) => {
  try {
    const { data } = await axios.get(
      `${process.env.CHAT_SERVICES_URL}/get-message/${conversationId}`,
    );
    return data;
  } catch (error) {
    console.log("error from getMessage backend:", error);
    return null;
  }
};
