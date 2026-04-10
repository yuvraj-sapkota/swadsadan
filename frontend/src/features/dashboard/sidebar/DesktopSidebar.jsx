import { useState } from "react";
import Logo from "../../../components/Logo";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, User, LogOut } from "lucide-react";
import { useRestaurantStore } from "../../../store/restaurant/restaurantStore";

const DesktopSidebar = ({ menuItems, setOpenLogout }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { restaurant } = useRestaurantStore();
  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out hidden md:flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between border-r ">
          {isOpen && (
            <div>
              <Logo />
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors h-12"
          >
            {isOpen ? (
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-green-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <Icon className="w-5 h-5 shrink-0" />
                {isOpen && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Profile Section */}
        <div className="p-4 border-t border-gray-200">
          <div
            className={`flex items-center gap-3 py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer ${
              !isOpen && "justify-center"
            }`}
          >
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>

            {isOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {restaurant?.owner.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {restaurant?.owner.email}
                </p>
              </div>
            )}
          </div>

          {isOpen && (
            <button
              onClick={() => setOpenLogout(true)}
              className="w-full flex  items-center gap-3 px-2 py-2 mt-2 rounded-lg border text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium text-sm">Logout</span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default DesktopSidebar;
