import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function CardDetails({ click: [_, addToCart] }) {
  const {
    id,
    image,
    title,
    description,
    newPrice,
    prevPrice,
    rating,
    company,
    color,
    category,
  } = JSON.parse(localStorage.getItem("card"));
  const card = {
    image,
    title,
    description,
    newPrice,
    prevPrice,
    rating,
    company,
    color,
    category,
  };

  const productId = localStorage.getItem("card-id");

  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (card) {
      setProduct(card);

      setLoading(false);
    } else {
      // Product not found, maybe redirect to a 404 page or show a message
      setLoading(false);
      setProduct(null); // Explicitly set to null if not found
    }
  }, [productId]); // Re-run when productId changes

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <ClipLoader size={50} color="#3B82F6" />
        <p className="ml-4 text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-700 p-8">
        <h1 className="text-3xl font-bold mb-4">Product Not Found!</h1>
        <p className="text-lg text-center">
          The product you are looking for does not exist or has been removed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 bg-white">
      <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="sticky top-15 sm:top-20 bg-white py-2 sm:py-3 w-full z-50 mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-2 sm:gap-8">
        {/* Product Image Section */}
        <div className="md:w-1/2 flex flex-col items-center justify-center relative p-4">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <ClipLoader size={40} color="#9CA3AF" />
            </div>
          )}
          <img
            src={image}
            alt={title}
            className={`max-w-full h-50 sm:h-auto max-h-96 object-contain rounded-lg transition-opacity duration-300 ${
              imageLoading ? "opacity-0" : "opacity-100"
            } `}
            onLoad={() => setImageLoading(false)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x300/cccccc/000000?text=Image+Error";
              setImageLoading(false);
            }}
          />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            {description}
          </p>

          <div className="flex items-baseline mb-4">
            <span className="text-gray-500 line-through text-xl mr-3">
              ${prevPrice}
            </span>
            <span className="text-3xl font-bold text-green-600">
              ${newPrice}
            </span>
          </div>

          <div className="flex items-center mb-4 text-lg">
            <span className="text-yellow-500 mr-2">
              {"★".repeat(Math.round(rating.rate))}
              {"☆".repeat(5 - Math.round(rating.rate))}
            </span>
            <span className="text-gray-600">({rating.count} reviews)</span>
          </div>

          <div className="text-gray-700 text-base mb-6 space-y-2">
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Company:</span> {company}
            </p>
            <p>
              <span className="font-semibold">Color:</span> {color}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {rating.rate} / 5
            </p>
          </div>

          <button
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
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
