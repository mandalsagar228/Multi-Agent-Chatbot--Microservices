import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../utils/firebase";
import api from "../utils/axios";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  console.log("userdata from store:", userData);

  const handlLogin = async (token) => {
    try {
      const { data } = await api.post("api/auth/login", { token });
      dispatch(setUserData(data));
      console.log("Data from handleLogin:", data);
      // return data;
    } catch (error) {
      console.log("error from handleLogin:", error);
      // return null;
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
        {!userData && (
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
              <button
                className=" w-full flex items-center justify-center gap-3 py-[11px] rounded-xl text-sm font-medium text-black/60 bg-white hover:bg-gray-200 transition-all duration-150"
                onClick={googleLogin}
              >
                <FcGoogle size={15} />
                Continue with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
