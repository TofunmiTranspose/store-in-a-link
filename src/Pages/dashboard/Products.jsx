import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Plus, Pencil, Trash2 } from "lucide-react";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import DeleteProductModal from "./DeleteProductModal";
import { toast } from "react-toastify";

export default function Products() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [storeColor, setStoreColor] = useState("#f97316");
  const [showAdd, setShowAdd] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const fetchProducts = async (uid) => {
    const q = query(collection(db, "products"), where("ownerId", "==", uid));
    const snap = await getDocs(q);
    setProducts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const fetchStoreTheme = async (uid) => {
    const themeSnap = await getDocs(
      query(collection(db, "users"), where("uid", "==", uid))
    );
    themeSnap.forEach((doc) => {
      const data = doc.data();
      if (data.themeColor) setStoreColor(data.themeColor);
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter((p) => p.id !== id));
      toast.success("Product deleted");
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        await Promise.all([fetchProducts(u.uid), fetchStoreTheme(u.uid)]);
      }
    });
    return () => unsub();
  }, []);

  if (!user) return <p className="text-center text-red-500">Login required</p>;

  return (
    <div className="min-h-screen bg-orange-50 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🛍 Your Products
        </h1>
        <button
          onClick={() => setShowAdd(true)}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-md shadow transition"
        >
          <Plus className="inline-block mr-1" size={16} /> Add Product
        </button>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-4 shadow hover:shadow-md transition flex flex-col justify-between"
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square rounded-md object-cover mb-3"
                />
              ) : (
                <div className="bg-orange-100 aspect-square rounded-lg mb-3" />
              )}

              <div className="font-semibold">{product.name}</div>
              <div className="text-sm text-gray-600 mt-1">
                ₦{product.price?.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Stock: {product.stock}
              </div>
              <div className="flex justify-end items-center gap-2 mt-3 text-gray-500">
                <button onClick={() => setEditProduct(product)}>
                  <Pencil size={16} className="hover:text-orange-600" />
                </button>
                <button onClick={() => setDeleteProduct(product)}>
                  <Trash2 size={16} className="hover:text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {showAdd && (
        <AddProductModal
          uid={user.uid}
          onClose={() => setShowAdd(false)}
          onSuccess={() => fetchProducts(user.uid)}
        />
      )}

      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onSuccess={() => fetchProducts(user.uid)}
        />
      )}

      {deleteProduct && (
        <DeleteProductModal
          product={deleteProduct}
          onClose={() => setDeleteProduct(null)}
          onDelete={() => {
            handleDelete(deleteProduct.id);
            setDeleteProduct(null);
          }}
        />
      )}
    </div>
  );
}
