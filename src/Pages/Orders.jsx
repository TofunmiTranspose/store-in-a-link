import { useState } from "react";
import { FiCheckCircle, FiTrash2 } from "react-icons/fi";

const sampleOrders = [
  {
    id: 1,
    customer: "Tola Ajayi",
    items: ["Ankara Gown"],
    amount: "₦9,500",
    paid: true,
    fulfilled: false,
  },
  {
    id: 2,
    customer: "Ada O.",
    items: ["Lace Wrapper", "Matching Cap"],
    amount: "₦14,000",
    paid: false,
    fulfilled: false,
  },
  {
    id: 3,
    customer: "Musa Bello",
    items: ["Kente Shirt"],
    amount: "₦6,500",
    paid: true,
    fulfilled: true,
  },
];

export default function Orders() {
  const [orders, setOrders] = useState(sampleOrders);

  const markAsFulfilled = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, fulfilled: true } : order
      )
    );
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        📦 Recent Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-slate-500">No orders yet.</p>
      ) : (
        <div className="bg-white shadow rounded-xl w-[90vw] sm:w-[90%] md:w-full overflow-x-scroll">
          <div
            className="overflow-x-scroll w-full"
            style={{ scrollbarWidth: "none" }}
          >
            <table className="sm:min-w-[700px] w-full text-sm">
              <thead className="bg-orange-100 text-orange-800">
                <tr>
                  <th className="py-3 px-4 text-left">Customer</th>
                  <th className="py-3 px-4 text-left">Items</th>
                  <th className="py-3 px-4 text-center">Amount</th>
                  <th className="py-3 px-4 text-center">Paid</th>
                  <th className="py-3 px-4 text-center">Fulfilled</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="px-4 py-3">{order.customer}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {order.items.join(", ")}
                    </td>
                    <td className="px-4 py-3 text-center">{order.amount}</td>
                    <td
                      className={`px-4 py-3 text-center font-medium ${
                        order.paid ? "text-emerald-600" : "text-orange-500"
                      }`}
                    >
                      {order.paid ? "Paid" : "Pending"}
                    </td>
                    <td
                      className={`px-4 py-3 text-center font-medium ${
                        order.fulfilled ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {order.fulfilled ? "Yes" : "No"}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-3 text-lg">
                        {!order.fulfilled && (
                          <button
                            onClick={() => markAsFulfilled(order.id)}
                            title="Mark as fulfilled"
                            className="text-orange-600 hover:text-orange-800 transition"
                          >
                            <FiCheckCircle />
                          </button>
                        )}
                        <button
                          onClick={() => deleteOrder(order.id)}
                          title="Delete order"
                          className="text-red-500 hover:text-red-700 transition"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
