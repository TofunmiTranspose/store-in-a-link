import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [storeColor, setStoreColor] = useState("#f97316");

  const fetchOrders = async (uid) => {
    const q = query(collection(db, "orders"), where("storeId", "==", uid));
    const snapshot = await getDocs(q);
    const result = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setOrders(result);
  };

  const fetchStoreTheme = async (uid) => {
    const storeSnap = await getDocs(
      query(collection(db, "users"), where("uid", "==", uid))
    );
    storeSnap.forEach((doc) => {
      const data = doc.data();
      if (data.themeColor) setStoreColor(data.themeColor);
    });
  };

  const updateStatus = async (id, current) => {
    const next = current === "Pending" ? "Fulfilled" : "Pending";
    try {
      await updateDoc(doc(db, "orders", id), { status: next });
      setOrders((prev) =>
        prev.map((order) =>
          order.id === id ? { ...order, status: next } : order
        )
      );
      toast.success(`Marked as ${next}`);
    } catch (err) {
      toast.error("Failed to update status.");
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await Promise.all([fetchOrders(user.uid), fetchStoreTheme(user.uid)]);
      }
    });
    return () => unsub();
  }, []);

  if (!user)
    return (
      <p className="text-center text-red-500">Please login to view orders.</p>
    );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-xl overflow-hidden">
            <thead
              style={{ backgroundColor: storeColor }}
              className="text-white"
            >
              <tr>
                <th className="py-2 px-4 text-left">Customer</th>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-orange-50">
                  <td className="py-2 px-4">
                    {order.buyer.name} <br />
                    <span className="text-xs text-gray-500">{order.buyer.phone}</span>
                  </td>
                  <td className="py-2 px-4">{order.items[0].name}</td>
                  <td className="py-2 px-4">{order.total}</td>
                  <td className="py-2 px-4 font-medium">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        order.status === "Fulfilled"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => updateStatus(order.id, order.status)}
                      className="text-sm text-orange-600 hover:underline"
                    >
                      {order.status === "Pending"
                        ? "Mark as Fulfilled"
                        : "Revert to Pending"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
