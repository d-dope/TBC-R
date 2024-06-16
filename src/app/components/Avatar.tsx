import { useState } from "react";
import Auth from "./Auth";

export default function Avatar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleAvatarClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="relative inline-block text-left">
      <span
        className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100 cursor-pointer"
        onClick={handleAvatarClick}
      >
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
      {dropdownVisible && (
        <div className="absolute cursor-pointer right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 cursor-pointer"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <Auth />
            </a>
            <a
              href="#"
              className="block px-4 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
