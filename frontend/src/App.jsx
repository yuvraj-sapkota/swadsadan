import Admin from "./layouts/dashboardLayout/admin/Admin";
import Menu from "./layouts/dashboardLayout/menu/Menu";
import QrDownload from "./layouts/dashboardLayout/qrDownload/QrDownload";
import Reservation from "./layouts/dashboardLayout/Reservation/Reservation";
import Settings from "./layouts/dashboardLayout/settings/Settings";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import RestaurantPage from "./pages/RestaurantPage";
const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RestaurantPage />} />
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
