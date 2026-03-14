import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Calendar,
  QrCode,
  Settings,
  Menu,
  X,
} from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";
import ConfirmLogout from "./ConfirmLogout";

export default function RestaurantSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openLogout, setOpenLogout] = useState(false);

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/dashboard/menu", label: "Menu", icon: UtensilsCrossed },
    { path: "/dashboard/reservations", label: "Reservations", icon: Calendar },
    { path: "/dashboard/qr", label: "QR Download", icon: QrCode },
    { path: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <MobileSidebar
        menuItems={menuItems}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setOpenLogout={setOpenLogout}
      />

      <DesktopSidebar menuItems={menuItems} setOpenLogout={setOpenLogout} />

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between gap-4  p-4  bg-white  shadow">
          <button
            onClick={() => setMobileOpen(true)}
            className=" rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          <div className="">
            <h1 className="font-bold text-lg">Welcome back John</h1>
            <p className="text-sm text-gray-500">The Golden Fork</p>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block p-4 border-b border-gray-200  bg-white">
          <h1 className="font-bold text-xl text-gray-800">
            Welcome back John 👋
          </h1>
          <p className="text-sm text-gray-500">The Golden Fork</p>
        </div>

        {/* Outlet Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </main>

      {openLogout && <ConfirmLogout onCancel={() => setOpenLogout(false)} />}
    </div>
  );
}
