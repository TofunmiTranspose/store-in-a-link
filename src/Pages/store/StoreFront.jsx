import { useState } from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";

const storeInfo = {
  name: "Rebecca's Fashion Store",
  handle: "rebeccafabrics",
  whatsapp: "https://wa.me/2348061484973",
};

import sampleProducts from "./data"; // Assuming you have a sampleProducts.js file with product data

export default function StoreFront() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const incrementQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCart((prev) => {
      const item = prev.find((item) => item.id === id);
      if (item.qty === 1) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const message = cart
    .map((item) => `${item.qty}x ${item.name} - ₦${item.price * item.qty}`)
    .join("%0A");
  const whatsappCheckout = `${storeInfo.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20order%3A%0A${message}%0A%0ATotal%3A%20₦${total}`;

  return (
    <div className="relative min-h-screen bg-orange-50 text-slate-800">
      {" "}
      {/* Header */}{" "}
      <div className="text-center py-8">
        {" "}
        <div className="w-20 h-20 mx-auto bg-orange-200 rounded-full mb-3 animate-pulse" />{" "}
        <h1 className="text-2xl font-bold">{storeInfo.name}</h1>{" "}
        <p className="text-sm text-slate-500">@{storeInfo.handle}</p>{" "}
      </div>
      {/* Products */}
      <div className="max-w-6xl mx-auto px-4 pb-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-md p-3 flex flex-col"
          >
            <div className="aspect-square bg-orange-100 rounded-lg mb-3 animate-pulse" />
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-sm font-bold text-orange-600 mb-2">
              ₦{product.price.toLocaleString()}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto text-sm bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-5 right-5 bg-orange-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2"
        >
          <FiShoppingCart />
          <span className="text-sm font-semibold">{cart.length}</span>
        </button>
      )}
      {/* Cart Drawer (Mobile) */}
      <div
        className={`sm:hidden fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Your Cart</h2>
          <button onClick={() => setShowCart(false)}>
            <FiX className="text-xl" />
          </button>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-160px)]">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-sm border-b pb-2"
            >
              <div>
                {item.name}
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="bg-orange-200 px-2 rounded"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="bg-orange-200 px-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="font-semibold">
                ₦{(item.qty * item.price).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <p className="font-semibold mb-2">Total: ₦{total.toLocaleString()}</p>
          <a
            href={whatsappCheckout}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg"
          >
            Checkout on WhatsApp
          </a>
        </div>
      </div>
      {/* Cart Page Side Panel (Desktop / Tablet) */}
      <div className="hidden sm:block fixed top-0 right-0 w-96 h-full bg-white border-l shadow-lg p-6 overflow-y-auto">
        <h2 className="font-bold text-xl mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-slate-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm border-b pb-2"
                >
                  <div>
                    {item.name}
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => decrementQty(item.id)}
                        className="bg-orange-200 px-2 rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => incrementQty(item.id)}
                        className="bg-orange-200 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="font-semibold">
                    ₦{(item.qty * item.price).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-semibold">Total: ₦{total.toLocaleString()}</p>
              <a
                href={whatsappCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-600 text-white py-2 mt-3 rounded-lg"
              >
                Checkout on WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
