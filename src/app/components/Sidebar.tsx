"use client";
import React, { useState } from "react";
import {
  MusicalNoteIcon,
  FilmIcon,
  TicketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onClearCategory: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onClearCategory,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations("SideBar");

  const categoryIcons = {
    Concert: <MusicalNoteIcon className="h-5 w-5 inline-block mr-2" />,
    Festival: <FilmIcon className="h-5 w-5 inline-block mr-2" />,
    Theatre: <TicketIcon className="h-5 w-5 inline-block mr-2" />,
    Art: <PaintBrushIcon className="h-5 w-5 inline-block mr-2" />,
    Technology: <DevicePhoneMobileIcon className="h-5 w-5 inline-block mr-2" />,
    Sports: <BoltIcon className="h-5 w-5 inline-block mr-2" />,
    Other: <GlobeAltIcon className="h-5 w-5 inline-block mr-2" />,
  };

  return (
    <div className="w-full md:w-64 md:h-[450px] h-28 bg-white dark:bg-primaryGray shadow-lg p-4 md:mb-0 rounded-md mt-28">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {t("cat")}
      </h2>

      {/* Dropdown for mobile */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full text-left px-4 py-2 rounded-md focus:outline-none bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
        >
          {selectedCategory ? t(selectedCategory) : t("allcat")}
        </button>
        {isDropdownOpen && (
          <ul className="absolute w-full space-y-2 mt-2 bg-white dark:bg-gray-700 shadow-md rounded-md z-50">
            <li>
              <button
                onClick={() => {
                  onClearCategory();
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-md focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                {t("allcat")}
              </button>
            </li>
            {categories.map((category) => (
              <li key={`mobile-${category}`}>
                <button
                  onClick={() => {
                    onSelectCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md focus:outline-none ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {/* @ts-ignore */}
                  {categoryIcons[category]}
                  {t(category)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Standard sidebar for larger screens */}
      <div className="hidden md:block">
        <ul className="space-y-2">
          <li>
            <button
              onClick={onClearCategory}
              className="w-full text-left px-4 py-2 rounded-md focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {t("allcat")}
            </button>
          </li>
          {categories.map((category) => (
            <li key={`desktop-${category}`}>
              <button
                onClick={() => onSelectCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-md focus:outline-none ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                }`}
              >
                {/* @ts-ignore */}

                {categoryIcons[category]}
                {t(category)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
