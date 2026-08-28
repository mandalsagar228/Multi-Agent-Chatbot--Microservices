import api from "../src/utils/axios";

const logout = async () => {
  try {
    const { data } = await api.get("api/auth/logout");
    console.log("Data from logout api frontend:", data);
  } catch (error) {
    console.log("Error from logout api frontend:", error);
  }
};

export default logout;
