"use client";
import React, { useState } from "react";

interface SidebarProps {
  categories: string[];
  selectedCategory: string; // Add selectedCategory prop
  onSelectCategory: (category: string) => void;
  onClearCategory: () => void; // Add onClearCategory prop
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onClearCategory,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full md:w-64 bg-white shadow-lg p-4 mb-4 md:mb-0 rounded">
      <h2 className="text-xl font-bold mb-4">Categories</h2>

      {/* Dropdown for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full text-left px-4 py-2 rounded-md focus:outline-none bg-gray-100 hover:bg-gray-200"
        >
          {selectedCategory ? selectedCategory : "Select a category"}
        </button>
        {isDropdownOpen && (
          <ul className="space-y-2 mt-2 bg-white shadow-md rounded-md">
            <li>
              <button
                onClick={() => {
                  onClearCategory();
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-md focus:outline-none hover:bg-gray-100"
              >
                All Categories
              </button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    onSelectCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md focus:outline-none ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {category}
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
              className="w-full text-left px-4 py-2 rounded-md focus:outline-none hover:bg-gray-100"
            >
              All Categories
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onSelectCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-md focus:outline-none ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
