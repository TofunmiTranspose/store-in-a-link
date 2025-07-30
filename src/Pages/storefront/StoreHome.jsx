import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { FiShoppingCart, FiX } from "react-icons/fi";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function StoreHome() {
  const { store } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  const theme = store?.themeColor || "#fb923c";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsRef = collection(db, "products");
        console.log(store.uid);
        
        const q = query(productsRef, where("ownerId", "==", store.uid));
        const snap = await getDocs(q);
        const items = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(items);
        
        setProducts(items);
      } catch (err) {
        console.error("Error loading products", err);
      } finally {
        setLoading(false);
      }
    };

    if (store?.uid) fetchProducts();
  }, [store]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);

  const handleCheckout = async () => {
    const name = prompt("Enter your name:");
    const phone = prompt("Enter your phone number:");

    if (!name || !phone) {
      alert("Please enter both name and phone.");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        storeId: store.uid,
        status: "Pending",
        createdAt: serverTimestamp(),
        items: cart,
        total,
        buyer: {
          name,
          phone,
        },
      });
      setCart([]);
      setShowCart(false);
      localStorage.removeItem("cart");
      alert("Order placed successfully!");
    } catch (err) {
      console.error("Order submission failed", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen bg-orange-50 text-slate-800">
      {/* Header */}
      <div className="text-center py-8">
        <img
          src={store.logoURL || "/logo-placeholder.png"}
          alt="Store Logo"
          className="w-20 h-20 mx-auto rounded-full mb-3 object-cover"
        />
        <h1 className="text-2xl font-bold">{store.storeName}</h1>
        <p className="text-sm text-slate-500">@{store.handle}</p>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        {loading ? (
          <p className="text-center text-slate-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-slate-500">No products available.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-md p-3 flex flex-col"
              >
                <img
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  className="aspect-square object-cover rounded-lg mb-3"
                />
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm font-bold mb-2" style={{ color: theme }}>
                  {formatCurrency(product.price)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto text-sm text-white px-3 py-2 rounded-lg"
                  style={{ backgroundColor: theme }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-5 right-5 text-white rounded-full p-4 shadow-lg flex items-center gap-2"
          style={{ backgroundColor: theme }}
        >
          <FiShoppingCart />
          <span className="text-sm font-semibold">{cart.length}</span>
        </button>
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="font-bold text-lg">Your Cart</h2>
          <button onClick={() => setShowCart(false)}>
            <FiX className="text-xl" />
          </button>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm border-b border-gray-300 pb-2"
              >
                <div>
                  {item.name}
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decrementQty(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => incrementQty(item.id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="font-semibold">
                  {formatCurrency(item.qty * item.price)}
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-4 border-t border-gray-300">
            <p className="font-semibold mb-2">Total: {formatCurrency(total)}</p>
            <button
              onClick={handleCheckout}
              className="block w-full text-center text-white py-2 rounded-lg"
              style={{ backgroundColor: theme }}
            >
              Submit Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
