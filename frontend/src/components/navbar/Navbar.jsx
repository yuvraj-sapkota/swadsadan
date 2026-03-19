import { Menu, X } from "lucide-react";
import Logo from "../Logo";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 transition"
              >
                Sign in
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-lg text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition shadow-sm"
              >
                Get started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileNav(true)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div>
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
            <Logo />
            <button
              onClick={() => setIsMobileNav(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex flex-col p-4 gap-2">
            <Link
              to="/login"
              className="w-full border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg text-gray-600 transition"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="w-full px-4 py-2 rounded-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white transition shadow"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMobileNav && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsMobileNav(false)}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
