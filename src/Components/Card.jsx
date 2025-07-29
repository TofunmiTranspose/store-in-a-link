import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
function Card({
  id,
  image,
  title,
  description,
  rating,
  prevPrice,
  newPrice,
  click: [_, addToCart],
}) {
  let navigate = useNavigate();
  const showDetails = () => {
    localStorage.setItem(
      "card",
      JSON.stringify({
        id,
        image,
        title,
        description,
        rating,
        prevPrice,
        newPrice,
        click: [_, addToCart],
      })
    );
    navigate(`/product:${localStorage.getItem("card-id")}`);
  };

  const [loading, setLoading] = useState(true);
  return (
    <section className="card flex flex-col justify-between bg-white m-1 md:m-2 shadow sm:shadow-md border border-[#ededed] rounded p-3 pb-2 cursor-pointer sm:hover:-translate-y-1 sm:hover:scale-102 delay-50 transition ease duration-300">
      <div
        onClick={() => showDetails()}
        className="mx-auto h-[5rem] flex justify-center items-center relative"
      >
        <img
          onLoad={() => setLoading(false)}
          src={image}
          alt="shoe"
          className={`h-full ${loading ? "opacity-20" : "block"} `}
        />
        <ClipLoader
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="absolute"
        />
      </div>
      <div onClick={() => showDetails()} className="mt-3">
        <h3
          className="text-[0.8rem] mt-auto font-semibold text-gray-900 mb-1 h-10 overflow-y-auto truncat w-9/10"
          style={{ scrollbarWidth: "none" }}
        >
          {" "}
          {/* 
    "lightningcss": "1.22.1",
    "@rollup/rollup-linux-x64-gnu": "^4.45.1", */}
          {title}
        </h3>
        {/* <p
          className="text-xs h-12 overflow-y-scroll truncat text-gray-600"
          style={{ scrollbarWidth: "none" }}
        >
          {description}
        </p> */}
        <div className="flex items-center">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-2 text-xs text-gray-500">{rating.count}</span>
        </div>
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-gray-500 line-through text-sm">
            ${prevPrice}
          </span>
          <span className="font-bold text-green-600">${newPrice}</span>
        </div>
      </div>
      <button
        className="w-full bg-blue-600 text-white text-sm py-1 rounded-md hover:bg-blue-700 2 transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          addToCart({
            id,
            image,
            title,
            description,
            rating,
            prevPrice,
            newPrice,
          });
        }}
      >
        Add to Cart
      </button>
    </section>
  );
}
export default Card;
