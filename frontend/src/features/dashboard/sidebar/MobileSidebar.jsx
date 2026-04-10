import Logo from "../../../components/Logo";
import { NavLink } from "react-router-dom";
import { User, LogOut, X } from "lucide-react";
import ConfirmLogout from "./ConfirmLogout";
import { useState } from "react";
import { useRestaurantStore } from "../../../store/restaurant/restaurantStore";
const MobileSidebar = ({
  mobileOpen,
  menuItems,
  setMobileOpen,
  setOpenLogout,
}) => {
  const { restaurant } = useRestaurantStore();
  console.log("restaurant real for", restaurant)

  return (
    <>
      {/* ================= MOBILE SIDEBAR DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Drawer Menu */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-green-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="font-medium text-sm">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Drawer Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {restaurant?.owner.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                 {restaurant?.owner.email}
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpenLogout(true)}
              className="w-full flex items-center gap-3 px-2  py-2 mt-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors border "
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium text-sm">Logout</span>
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default MobileSidebar;
