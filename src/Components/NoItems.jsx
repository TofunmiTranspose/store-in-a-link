import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { MdShoppingBag } from "react-icons/md";
const NoItemsFound = () => {
  return (
    <div className="text-center p-10 bg-white rounded-xl shadow-lg m-5 max-w-4xl flex flex-col items-center justify-center">
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-20 h-20 text-gray-500 stroke-current stroke-1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>

      <p className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
        Oops! No Items Found.
      </p>
      <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-xs">
        We couldn't find any products based on your current selection.
      </p>
      <ul className="list-none p-0 m-0 text-left w-full max-w-xs">
        <li className="flex items-start text-base text-gray-700 mb-2">
          <span className="text-green-500 font-bold mr-2 mt-0.5">✓</span>
          Double-check your spelling
        </li>
        <li className="flex items-start text-base text-gray-700 mb-2">
          <span className="text-green-500 font-bold mr-2 mt-0.5">✓</span>
          Try a different search category
        </li>
      </ul>
    </div>
  );
};

export default NoItemsFound;
