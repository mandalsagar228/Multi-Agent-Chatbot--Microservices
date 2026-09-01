import api from "../src/utils/axios";

const getMessage = async (id) => {
  try {
    const { data } = await api.get(`/api/chat/get-message/${id}`);
    console.log("data from getmessage-frontend:", data);
    return data;
  } catch (error) {
    console.log("error from the  getMessage:", error);
    return [];
  }
};

export default getMessage;
