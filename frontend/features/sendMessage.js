import api from "../src/utils/axios";

const sendMessage = async (payload) => {
  try {
    console.log("payload:", payload);
    const { data } = await api.post("/api/agent/chat", payload);
    console.log("data from sendmessage api frontend:", data);
    return data;
  } catch (error) {
    console.log("Error from the sendMessage- frontend:", error);
  }
};

export default sendMessage;
