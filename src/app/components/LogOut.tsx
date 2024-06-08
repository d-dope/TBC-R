"use client";

import React from "react";
import { handleLogout } from "../scripts/logout";

const LogOut: React.FC = () => {
  return (
    <button
      onClick={() => handleLogout().then(() => window.location.reload())}
      className="ml-auto rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Log Out
    </button>
  );
};

export default LogOut;
