import Admin from "./features/dashboard/admin/Admin";
import Menu from "./features/dashboard/menu/Menu";
import Reservation from "./features/dashboard/reservation/Reservation";
import QrDownload from "./features/dashboard/qrDownload/QrDownload";
import Settings from "./features/dashboard/settings/Settings";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import RestaurantPage from "./pages/RestaurantPage";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import RegisterRestaurant from "./features/restaurant/pages/RegisterRestaurant";
const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          {/* public routes  */}
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/partners" element={<RegisterRestaurant />} />

          {/* protected routes  */}
          <Route path="/dashboard/" element={<Dashboard />}>
            <Route index element={<Admin />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reservations" element={<Reservation />} />
            <Route path="qr" element={<QrDownload />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
