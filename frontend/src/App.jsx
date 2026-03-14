
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
const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RestaurantPage />} />
          <Route path="/cart" element={<Cart />} />
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
