import { useState } from "react";
import { auth, db, storage } from "../../firebase";
import axios from "axios";
import {
  doc,
  updateDoc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function SetupStore() {
  const [storeName, setStoreName] = useState("");
  const [handle, setHandle] = useState("");
  const [currency, setCurrency] = useState("₦");
  const [themeColor, setThemeColor] = useState("#f97316"); // Orange
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [handleAvailable, setHandleAvailable] = useState(null);
  const [checkingHandle, setCheckingHandle] = useState(false);

  const navigate = useNavigate();

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "storein-link");
    formData.append("folder", "storein-link");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/db4zykhyw/image/upload",
      formData
    );    

    return res.data.secure_url;
  };

  const checkHandleAvailability = async (value) => {
    if (!value || value.length < 3) {
      setHandleAvailable(null);
      return;
    }

    setCheckingHandle(true);
    const q = query(collection(db, "users"), where("handle", "==", value));
    const snapshot = await getDocs(q);
    const taken = snapshot.docs.some((doc) => doc.id !== auth.currentUser.uid);
    setHandleAvailable(!taken);
    setCheckingHandle(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!handleAvailable) {
        toast.error("Please choose a unique handle before continuing.");
        setLoading(false);
        return;
      }

      let logoURL = "";
      let bannerURL = "";

      if (logo) logoURL = await uploadImage(logo, "logo");
      if (banner) bannerURL = await uploadImage(banner, "banner");

      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        storeName,
        handle,
        currency,
        themeColor,
        logoURL,
        bannerURL,
        isNew: false,
      });

      toast.success("Store setup complete!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Failed to setup store");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold mb-6 text-orange-600">
        Setup Your Store
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">Store Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="font-medium">Store Handle (URL)</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="e.g. rebecca-fashion"
            value={handle}
            onChange={(e) => {
              const value = e.target.value.toLowerCase().replace(/\s/g, "-");
              setHandle(value);
              checkHandleAvailability(value);
            }}
            required
          />
          {checkingHandle && (
            <p className="text-sm text-gray-500">Checking availability...</p>
          )}
          {!checkingHandle && handle.length > 2 && (
            <p
              className={`text-sm mt-1 ${
                handleAvailable ? "text-green-600" : "text-red-600"
              }`}
            >
              {handleAvailable
                ? "✅ Handle is available"
                : "❌ Handle is taken"}
            </p>
          )}
        </div>

        <div>
          <label className="font-medium">Currency</label>
          <select
            className="w-full border p-2 rounded"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="₦">₦ Nigerian Naira</option>
            <option value="$">$ US Dollar</option>
            <option value="£">£ British Pound</option>
            <option value="€">€ Euro</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Theme Color</label>
          <input
            type="color"
            className="w-16 h-10 border p-1 rounded"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
        </div>

        <div>
          <label className="font-medium">Logo (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        </div>

        <div>
          <label className="font-medium">Banner Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setBanner(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Setting up..." : "Save & Continue"}
        </button>
      </form>
    </div>
  );
}
