import React from "react";

const WelcomeLoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 text-center">
      {/* App Logo/Icon (Optional - replace with your actual logo if you have one) */}
      <div className="mb-8">
        <svg
          className="w-24 h-24 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
      </div>

      {/* Welcome Message */}
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-up">
        Welcome to Love Cultured
      </h1>
      <p className="text-xl font-light mb-12 max-w-xl animate-fade-in-up animation-delay-200">
        Your destination for the latest styles and unbeatable deals.
      </p>

      <div className="relative w-16 h-16 mb-4">
        {/* Outer circle (background) */}
        <div className="absolute inset-0 rounded-full border-4 border-white opacity-30 animate-bounc"></div>
        {/* Inner spinning arc */}
        <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
      </div>
      <p className="text-lg font-medium animate-pulse">
        Preparing your shopping experience...
      </p>
    </div>
  );
};

export default WelcomeLoadingPage;
