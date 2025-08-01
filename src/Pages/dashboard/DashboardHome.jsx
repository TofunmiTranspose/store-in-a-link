import { useOutletContext } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";

function DashboardHome() {
  const { store, user } = useOutletContext(); // 🧠 get from parent
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const prodSnap = await getDocs(
        query(collection(db, "products"), where("ownerId", "==", user.uid))
      );
      setProducts(prodSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      const orderSnap = await getDocs(
        query(collection(db, "orders"), where("storeId", "==", user.uid))
      );
      setOrders(orderSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

<<<<<<< HEAD
    fetchData();
  }, [user]);
  
  const storeUrl = `https://storein.link/${store?.handle || "yourstore"}`;
=======
  const storeUrl = `https://store-in-a-link.vercel.app/${store?.handle || "yourstore"}`;
>>>>>>> 3fbaacafed3a8dc401bc5da926f96f7b54674ff1
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const themeColor = store?.themeColor || "#f97316";

  return (
    <div className="max-w-6xl mx-auto space-y-10 p-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            👋 Welcome, {store?.storeName || "Seller"}
          </h1>
          <p className="text-slate-500 mt-1">
            Here’s a quick overview of your store performance.
          </p>
        </div>

        {/* Store Link */}
        <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium shadow">
          <span className="truncate">{storeUrl}</span>
          <button onClick={() => navigator.clipboard.writeText(storeUrl)}>
            <FiCopy className="hover:scale-110 transition" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Products", value: products.length },
          { label: "Orders", value: orders.length },
          {
            label: "Revenue",
            value: `${store?.currency || "₦"}${totalRevenue.toLocaleString()} `,
          },
          { label: "Visits", value: store?.visits || 0 }, // if you track visits
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition"
          >
            <p className="text-gray-500 text-sm mb-1">{label}</p>
            <p className="text-xl font-bold" style={{ color: themeColor }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Best Selling Products (Placeholder) */}
      <div>
        <h2 className="text-xl font-semibold mb-3">🔥 Best Sellers</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[...products]
            .sort((a, b) => (b.sold || 0) - (a.sold || 0))
            .slice(0, 3)
            .map((prod) => (
              <div
                key={prod.id}
                className="bg-white p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={prod.image || "/placeholder.jpg"}
                  alt={prod.name}
                  className="aspect-square w-full object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold text-sm">{prod.name}</h3>
                <p className="text-xs text-gray-500">
                  {store.currency || "₦"}
                  {prod.price} — {prod.sold || 0} sold
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <h2 className="text-xl font-semibold mb-3">🛍 Recent Orders</h2>
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-orange-100 text-orange-800">
              <tr>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.length === 0 ? (
                <tr>
                  <td className="py-3 px-4 text-gray-400 italic" colSpan="4">
                    No recent orders yet.
                  </td>
                </tr>
              ) : (
                recentOrders.map((order, idx) => (
                  <tr key={order.id} className="border-t">
                    <td className="py-2 px-4">
                      {order.buyer?.name || "N/A"}
                    </td>
                    <td className="py-2 px-4">
                      {order.items?.[0]?.name || "Multiple"}
                    </td>
                    <td className="py-2 px-4">
                      {store.currency || "₦"}
                      {order.total?.toLocaleString()}
                    </td>
                    <td
                      className={`py-2 px-4 font-medium ${
                        order.status === "Fulfilled"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {order.status || "Pending"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
