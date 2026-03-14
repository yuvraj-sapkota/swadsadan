import { Layers, Utensils } from "lucide-react";
import React from "react";

const MenuTabs = ({ activeTab, setSearchParams }) => {
  return (
    <>
      <div className="flex flex-row gap-3 ">
        <button
          onClick={() => setSearchParams({ tab: "categories" })}
          className={`flex items-center gap-2 px-4 py-2 rounded-md  text-sm sm:text-base ${
            activeTab === "categories"
              ? "bg-orange-500 text-white"
              : "border text-gray-700 border-gray-200"
          }`}
        >
          <Layers size={18} />
          Categories
        </button>

        <button
          onClick={() => setSearchParams({ tab: "menus" })}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
            activeTab === "menus"
              ? "bg-orange-500 text-white"
              : "border border-gray-200 text-gray-700 "
          }`}
        >
          <Utensils /> Menu Items
        </button>
      </div>
    </>
  );
};

export default MenuTabs;
