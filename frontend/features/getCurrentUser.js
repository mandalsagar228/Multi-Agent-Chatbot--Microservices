import api from "../src/utils/axios";

const getCurrentUser = async () => {
  try {
    const { data } = await api.get("/api/me");
    console.log("Data from getCurrentUser:", data);
    return data;
  } catch (error) {
    console.log("Error while calling getCurrentUsr-frontend", error);
    return null;
  }
};

export default getCurrentUser;
