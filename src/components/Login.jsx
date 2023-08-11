import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInAnonymously, signInWithPopup } from "firebase/auth";

const Login = () => {

    const history = useNavigate()

  function signIn(guest) {
    if (guest) {
        signInAnonymously(auth)
            .then(() => history('/channels'))
            .catch((error) => alert(error.message));
    } else {
      signInWithPopup(auth, provider)
        .then(() => history("/channels"))
        .catch((error) => alert(error.message));
    }
  }

  return (
    <div className="bg-blue-700 h-screen flex justify-center items-center">
      <div className="bg-black h-[65%] w-[35%] rounded-3xl flex flex-col items-center justify-center">
        <h1 className="text-white mb-20">How would you like to login?</h1>
        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mb-12" onClick={() => {signIn(false)}}>
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Sign in with Google
          </span>
        </button>
        <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group" onClick={() => signIn(true)}>
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Sign in with Guest Account
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
