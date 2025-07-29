import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing Page
import Landing from "./Pages/Dashboard/Landing";

// Seller Dashboard Pages
import DashboardLayout from "./Components/DasboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/dashboard/Product";
import Orders from "./pages/dashboard/Orders";
import Settings from "./pages/dashboard/Settings";

// Public Store Page
import StoreFront from "./Pages/store/StoreFront";

// 404 Fallback
const NotFound = () => (
  <div className="text-center mt-20 text-slate-500">
    <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
    <p>The page you are looking for doesn’t exist.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Seller Dashboard with layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Public Storefront */}
        <Route path="/:handle" element={<StoreFront />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
