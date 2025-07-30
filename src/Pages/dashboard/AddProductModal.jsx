import { X } from "lucide-react";
import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";

export default function AddProductModal({ uid, onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    toast.info("Compressing and uploading image...");

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      const compressed = await imageCompression(file, options);
      const formData = new FormData();
      formData.append("file", compressed);
      formData.append("upload_preset", "storein-link");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/db4zykhyw/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setImageUrl(data.secure_url);
      toast.success("Image uploaded!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl) return toast.error("Please upload an image");
    setSubmitting(true);

    try {
      await addDoc(collection(db, "products"), {
        ...form,
        ownerId: uid,
        image: imageUrl,
        price: parseFloat(form.price),
        stock: parseInt(form.stock),
        createdAt: Timestamp.now(),
      });
      toast.success("Product added");
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Add failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="w-full sm:max-w-sm bg-white p-6 shadow-lg animate-slideIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-orange-600">Add Product</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-orange-600" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 overflow-y-scroll h-[100%] pb-10"
          style={{ scrollbarWidth: "none" }}
        >
          <div>
            <label className="text-sm font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Price (₦)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
              required
            />
          </div>

          <div className="">
            <label className="text-sm font-medium">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full mt-1 text-sm"
              disabled={uploading}
            />
          </div>

          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded"
              className="w-full rounded-md mt-2"
            />
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-sm"
            disabled={submitting}
          >
            {submitting ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
