"use client";

import { handleLogout } from "../scripts/logout";
const LogOut = () => {
  function handlClick() {}
  return (
    <button
      onClick={() => handleLogout().then(() => window.location.reload())}
      className="border-0 bg-indigo-600 py-2 px-3 mx-auto rounded-lg text-white lg:text-[20px] hover:bg-orange transition-all transform duration-300 ease-linear"
    >
      Log out
    </button>
  );
};
export default LogOut;
