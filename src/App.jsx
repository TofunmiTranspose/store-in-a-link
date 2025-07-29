import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import StoreView from "./pages/StoreView";
import Settings from "./Pages/Settings";
import DashboardLayout from "./Components/DasboardLayout";
import Product from "./Pages/Product";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<Product />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
        <Route path="/:storename" element={<StoreView />} />
      </Routes>
    </Router>
  );
}
