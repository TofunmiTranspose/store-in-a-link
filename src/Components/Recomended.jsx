import React from "react";

function Recomended({ handleClick, active }) {
  const baseButtonClasses =
    "sbtn sm:btn px-4 py-2 rounded-md transition-colors duration-200";
  const activeClasses = "bg-blue-600 text-white";
  const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";

  const getButtonClasses = (value) => {
    const isActive = (active === null && value === "") || active === value;
    return `${baseButtonClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <>
      <div className="px-3">
        <h2 className="hidden sm:block mt-2 mb-1 sm:my-4 sm:text-[20px] font-semibold text-gray-800">
          Recommended
        </h2>
        <div className="recomended-btns my-5 sm:my-0 flex gap-1 sm:gap-2 flex-wrap">
          <button
            onClick={handleClick}
            value=""
            className={getButtonClasses("")}
          >
            All Products
          </button>
          <button
            onClick={handleClick}
            value="Nike"
            className={getButtonClasses("Nike")}
          >
            Nike
          </button>
          <button
            onClick={handleClick}
            value="Adidas"
            className={getButtonClasses("Adidas")}
          >
            Adidas
          </button>
          <button
            onClick={handleClick}
            value="Puma"
            className={getButtonClasses("Puma")}
          >
            Puma
          </button>
          <button
            onClick={handleClick}
            value="Martens"
            className={getButtonClasses("Martens")}
          >
            Martens
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(Recomended); // Ensure Recomended is memoized for performance
