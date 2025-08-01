import { useEffect, useState } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FiHome, FiShoppingCart, FiClock, FiMenu } from "react-icons/fi";
import { db } from "../firebase/index";

export default function StoreLayout() {
  const { handle } = useParams();
  const location = useLocation();
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("handle", "==", handle));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setStore(snapshot.docs[0].data());
        } else {
          setStore(null);
        }
      } catch (error) {
        console.error("Error fetching store:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStore();
  }, [handle]);

  if (loading) return <div className="p-10 text-center">Loading store...</div>;
  if (!store)
    return <div className="p-10 text-center text-red-500">Store not found</div>;

  const theme = store.themeColor || "#fb923c";
  const navLinks = [
    { label: "Home", icon: <FiHome />, path: `/${handle}` },
    { label: "Orders", icon: <FiClock />, path: `/${handle}/orders ` },
  ];

  const isActive = (path) => location.pathname === path;
  const contrast = getContrastColor(theme);

  return (
    <div className="flex min-h-screen bg-[#fefdfc]">
      {/* Mobile Menu Icon */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="p-2 rounded-md shadow bg-white"
        >
          <FiMenu size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <div className="p-6 flex flex-col h-full">
          <Link to={`/${handle}`} className="flex items-center gap-3 mb-6">
            <img
              src={store.logoURL || "/logo-placeholder.png"}
              alt="Store logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-lg font-bold text-slate-800 truncate">
              {store.storeName || "My Store"}
            </h1>
          </Link>

          <nav className="flex-1 space-y-2">
            {navLinks.map(({ label, icon, path }) => (
              <Link
                key={label}
                to={path}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition ${
                  isActive(path)
                    ? "shadow text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
                style={{
                  backgroundColor: isActive(path) ? theme : "transparent",
                  color: isActive(path) ? contrast : undefined,
                }}
                onClick={() => setSidebarOpen(false)}
              >
                {icon}
                {label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t text-xs text-slate-400">
            Powered by{" "}
            <span className="font-semibold" style={{ color: theme }}>
              Store-in-a-Link
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 ">
        <Outlet context={{ store }} theme={[theme, contrast]} />
      </main>
    </div>
  );
}

function getContrastColor(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 160 ? "#000000" : "#ffffff";
}
