import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Rebecca's Fashion Store",
    handle: "rebeccasfabrics",
    whatsapp: "https://wa.me/2348061484973",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate saving logic
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-slate-800">⚙ Store Settings</h1>

      <form
        onSubmit={handleSave}
        className="space-y-6 bg-white p-6 rounded-xl shadow"
      >
        {/* Store Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700"
          >
            Store Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Store Handle */}
        <div>
          <label
            htmlFor="handle"
            className="block text-sm font-medium text-slate-700"
          >
            Store Handle
          </label>
          <div className="mt-1 flex rounded-lg shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              storein.link/
            </span>
            <input
              type="text"
              name="handle"
              value={form.handle}
              onChange={handleChange}
              className="flex-1 block w-full min-w-0 rounded-none rounded-r-lg border-gray-300 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* WhatsApp Link */}
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-slate-700"
          >
            WhatsApp Link
          </label>
          <input
            type="url"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            e.g. https://wa.me/2348123456789
          </p>
        </div>

        {/* Save Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          >
            Save Changes
          </button>
          {success && (
            <p className="text-emerald-600 text-sm mt-2">✅ Changes saved!</p>
          )}
        </div>
      </form>
    </div>
  );
}
