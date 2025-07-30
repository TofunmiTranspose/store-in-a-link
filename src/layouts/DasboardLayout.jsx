import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
console.log(auth.currentUser);

import {
  getDoc,
  collection,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { FiMenu, FiX } from "react-icons/fi";

const menu = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Products", path: "/dashboard/products" },
  { label: "Orders", path: "/dashboard/orders" },
  { label: "Settings", path: "/dashboard/settings" },
];

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const uid = firebaseUser.uid;
        console.log("🔥 Logged-in UID:", uid); // ✅

        setUser(firebaseUser);

        const storeRef = doc(db, "stores", uid);
        const storeSnap = await getDoc(storeRef);

        console.log("📦 Store exists:", storeSnap.exists()); // ✅

        if (!storeSnap.exists()) {
          navigate("/setup");
          return;
        }

        const storeData = storeSnap.data();
        console.log("✅ Store data:", storeData); // ✅

        setStore({ uid, ...storeData });
        setLoading(false);
      } else {
        navigate("/login");
      }
    });

    return () => unsub();
  }, [navigate]);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  return (
    <div className="min-h-screen flex bg-orange-50 text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 font-bold text-orange-500 text-2xl">
          Store-in-a-Link
        </div>
        <nav className="flex flex-col gap-2 p-4">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : "hover:bg-orange-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <aside className="fixed z-40 top-0 left-0 w-64 h-full bg-white shadow-lg p-6 pt-10 md:hidden">
          <div className="font-bold text-orange-500 text-2xl mb-4">
            Store-in-a-Link
          </div>
          <nav className="flex flex-col gap-2">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-lg transition ${
                  location.pathname === item.path
                    ? "bg-orange-100 text-orange-600 font-semibold"
                    : "hover:bg-orange-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 pt-12">
        <Outlet context={{ store, user }} />
      </main>
    </div>
  );
}
