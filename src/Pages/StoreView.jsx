import React from "react";
import { useParams } from "react-router-dom";

function StoreView() {
  const { storename } = useParams();
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">{storename}'s Store</h1>
      <p className="text-gray-600 mb-4">
        Browse products and place your order.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {/* ProductCard components */}
      </div>
    </div>
  );
}

export default StoreView;
