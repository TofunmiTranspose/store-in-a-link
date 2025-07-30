import { Routes, Route } from "react-router-dom";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";
import SetupStore from "./Pages/dashboard/SetupStore";
import DashboardLayout from "./layouts/DasboardLayout";
import DashboardHome from "./Pages/dashboard/DashboardHome";
import Products from "./Pages/dashboard/Products";
import Orders from "./Pages/dashboard/Orders";
import Settings from "./Pages/dashboard/Settings";
//import StoreHome from "./pages/storefront/StoreHome";
//import ProductPage from "./pages/storefront/ProductPage";
//import Checkout from "./pages/storefront/Checkout";
import Success from "./pages/storefront/Success";
import OrderHistory from "./pages/storefront/OrderHistory";
import ProtectedRoute from "./components/ProtectedRoute";
import RequireStoreSetup from "./components/RequireStoreSetup";
import Landing from "./Pages/Landing";
//import StoreLayout from "./layouts/StoreLayout";
import StoreFront from './Pages/store/StoreFront'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* 🔓 Public Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 🧭 Setup (also protected) */}
      <Route
        path="/setup-store"
        element={
          <ProtectedRoute>
            <SetupStore />
          </ProtectedRoute>
        }
      />

      {/* 🧑‍💼 Seller Dashboard - All protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <RequireStoreSetup>
              <DashboardLayout>
                <DashboardHome />
              </DashboardLayout>
            </RequireStoreSetup>
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 🛍 Public Storefront */}
      {/* <Route path="/:handle" element={<StoreHome />}>
        <Route index element={<StoreFront />} />
        <Route path="product/:slug" element={<ProductPage />} />
        <Route path="/:handle/cart" element={<Checkout />} />
        <Route path="/:handle" element={<Success />} />
        <Route
          path="orders"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
      </Route> */}
      <Route path="/:handle" element={<StoreFront/>}/>
    </Routes>
  );
}
