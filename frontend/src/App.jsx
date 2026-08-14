import { signInWithPopup } from "firebase/auth";
import "./App.css";
import { auth, googleProvider } from "./utils/firebase";
import api from "./utils/axios";

function App() {
  const handlLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login", { token });
      console.log("Data from handleLogin:", data);
    } catch (error) {
      console.log("error from handleLogin:", error);
    }
  };

  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider);
    const token = await data.user.getIdToken();
    console.log("Token from googleLogin:", token);
    await handlLogin(token);
    console.log("Data:", data);
  };
  return (
    <>
      <button
        className=" text-red-500 border-2 justify-center"
        onClick={googleLogin}
      >
        Login with google
      </button>
    </>
  );
}

export default App;
