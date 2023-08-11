import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    history('/login')
  };

  return (
    <div>
      <header className="bg-discord_blue flex items-center justify-between py-4 px-6">
        <a href="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo-2015.png"
            className="w-32 h-18 object-contain"
            alt=""
          />
        </a>
        <div className="hidden lg:flex space-x-6 text-white">
          <a href="/" className="link cursor-not-allowed">Download</a>
          <a href="/" className="link cursor-not-allowed">Why Discord?</a>
          <a href="/" className="link cursor-not-allowed">Nitro</a>
          <a href="/" className="link cursor-not-allowed">Safety</a>
          <a href="/" className="link cursor-not-allowed">Support</a>
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium"
            onClick={!user ? signIn : () => history("/channels")}
          >
            {!user ? "Login" : "Open Discord"}
          </button>
          <Bars3Icon className="h-9 text-white cursor-pointer lg:hidden" />
        </div>
      </header>
    </div>
  );
}

export default Header;
