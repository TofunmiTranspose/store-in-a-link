import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

const sampleProducts = [
  {
    id: 1,
    name: "Ankara Maxi Dress",
    price: "₦9,500",
    image: "",
    stock: 7,
  },
  {
    id: 2,
    name: "Lace Wrapper Set",
    price: "₦12,000",
    image: "",
    stock: 3,
  },
  {
    id: 3,
    name: "Kente Print Cap",
    price: "₦2,000",
    image: "",
    stock: 15,
  },
];

export default function Products() {
  const [products, setProducts] = useState(sampleProducts);

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">🛍 Your Products</h1>
        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow transition">
          <FiPlus />
          Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-slate-500">
          No products added yet. Start by clicking “Add Product”.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col"
            >
              {/* Placeholder image */}
              <div className="bg-orange-100 aspect-square rounded-lg mb-4 animate-pulse" />

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-700 mb-1">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mb-1">{product.price}</p>
                <p className="text-xs text-gray-400">Stock: {product.stock}</p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-4 justify-end text-sm text-slate-600">
                <button className="hover:text-orange-600" title="Edit">
                  <FiEdit2 />
                </button>
                <button className="hover:text-red-500" title="Delete">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
