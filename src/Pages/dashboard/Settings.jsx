import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import PreviewStoreTheme from "./PreviewStoreTheme";

export default function Settings() {
  const [form, setForm] = useState({
    name: "",
    handle: "",
    whatsapp: "",
    instagram: "",
    bio: "",
    currency: "₦",
    themeColor: "#f97316",
    logo: "",
    banner: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState("");

  // Load store info
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      const docRef = doc(db, "stores", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setForm(docSnap.data());
      setUserId(user.uid);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file || !userId) return;

    const storageRef = ref(storage, `stores / ${userId}/${type}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setForm((prev) => ({ ...prev, [type]: url }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, "stores", userId), form);
      alert("Changes saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving settings.");
    }
    setSaving(false);
  };

  if (loading) return <p className="p-6">Loading store info...</p>;

  return (
    <div className="bg-[#fef6ef] min-h-screen p-4 sm:p-8">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-6 text-slate-800">
        <span>⚙</span> Store Settings
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Settings Form */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Store Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Store Handle
            </label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="bg-slate-100 px-3 text-sm text-slate-500">
                storein.link/
              </span>
              <input
                type="text"
                value={form.handle}
                disabled
                className="w-full px-4 py-2 text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              WhatsApp Link
            </label>
            <input
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="https://wa.me/2348123456789"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Instagram Username
            </label>
            <input
              type="text"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              placeholder="e.g. rebeccastore"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Store Bio
            </label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-orange-400"
              placeholder="Tell your customers what you sell"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Currency
            </label>
            <select
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-orange-400"
            >
              <option value="₦">₦ - Naira</option>
              <option value="$">$ - Dollar</option>
              <option value="£">£ - Pound</option>
              <option value="€">€ - Euro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Theme Color
            </label>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Theme Color
              </label>
              <input type="color" name="themeColor" value={form.themeColor} onChange={handleChange} className="w-16 h-10 rounded-md border cursor-pointer" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Upload Logo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "logo")}
            />
            {form.logo && (
              <img
                src={form.logo}
                alt="logo"
                className="w-16 h-16 rounded-full mt-2 object-cover"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Upload Banner
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "banner")}
            />
            {form.banner && (
              <img
                src={form.banner}
                alt="banner"
                className="mt-2 rounded-lg w-full max-h-40 object-cover"
              />
            )}
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-md text-sm font-semibold transition"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Store Preview */}
        <PreviewStoreTheme form={form} />
      </div>
    </div>
  );
}
