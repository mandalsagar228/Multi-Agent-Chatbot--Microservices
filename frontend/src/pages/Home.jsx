import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../utils/firebase";
import api from "../utils/axios";

const Home = () => {
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
      <div className=" h-screen flex bg-[#0d0f14] text-white overflow-hidden">
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="flex flex-col gap-5 w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2xl p-7">
            <div className=" flex flex-col gap-1">
              <h2 className=" text-[17px] font font-semibold text-slate-100 tracking-tight">
                Welcome to Autochat
              </h2>
              <p className=" text-[13px] text-slate-50 ">
                Please login to conitnu using app
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
