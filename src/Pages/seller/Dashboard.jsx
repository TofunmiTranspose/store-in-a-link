import { FiCopy } from "react-icons/fi";

export default function Dashboard() {
  const storeUrl = "https://storein.link/rebeccasfabrics";

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            👋 Welcome, Rebecca
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
          { label: "Total Products", value: 18 },
          { label: "Orders This Week", value: 9 },
          { label: "Revenue", value: "₦42,500" },
          { label: "Visits", value: 127 },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition"
          >
            <p className="text-gray-500 text-sm mb-1">{label}</p>
            <p className="text-xl font-bold text-orange-500">{value}</p>
          </div>
        ))}
      </div>

      {/* Best Selling Products */}
      <div>
        <h2 className="text-xl font-semibold mb-3">🔥 Best Sellers</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-3 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="bg-orange-100 aspect-square rounded-lg mb-2 animate-pulse" />
              <h3 className="font-semibold text-sm">Ankara Maxi Gown</h3>
              <p className="text-xs text-gray-500">₦9,500 — 12 sold</p>
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
              {[
                ["Tola Ajayi", "Lace Wrapper", "₦7,000", "Paid"],
                ["Musa B.", "Ankara Gown", "₦9,500", "Pending"],
                ["Ada O.", "Matching Cap", "₦2,000", "Paid"],
              ].map(([name, product, price, status], idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 px-4">{name}</td>
                  <td className="py-2 px-4">{product}</td>
                  <td className="py-2 px-4">{price}</td>
                  <td
                    className={`py-2 px-4 font-medium ${
                      status === "Paid" ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
