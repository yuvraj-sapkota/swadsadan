import {
  Eye,
  EyeOff,
  Layers,
  LayoutGrid,
  Pencil,
  Plus,
  Search,
  Table2,
  Trash2,
  Utensils,
} from "lucide-react";
import StatsCard from "./menuParts/StatsCard";
import { use, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./menuParts/Header";
import CategoryModal from "./menuParts/CategoryModal";
import MenuModal from "./menuParts/MenuModal";
import MenuTabs from "./menuParts/MenuTabs";
import CategoryTable from "./menuParts/CategoryTable";
import CategoryGrid from "./menuParts/CategoryGrid";
import MenuTable from "./menuParts/MenuTable";
import MenuGrid from "./menuParts/MenuGrid";

const Menu = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "categories";
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);

  const [categories, setCategories] = useState([
    {
      _id: "65ffb123abc456",
      name: "Pizza",
      description: "Cheesy pizza items",
      status: "active",
      priority: 1,
      imageUrl: "https://yourdomain.com/uploads/pizza.jpg",
      createdAt: "2026-02-17T12:20:00.000Z",
    },
    {
      _id: "65ffb456def789",
      name: "Burger",
      description: "Fresh burgers with different flavors",
      status: "active",
      priority: 2,
      imageUrl: "https://yourdomain.com/uploads/burger.jpg",
      createdAt: "2026-02-17T12:25:00.000Z",
    },
    {
      _id: "65ffb789ghi012",
      name: "Momo",
      description: "Nepali style steamed and fried momo",
      status: "hidden",
      priority: 3,
      imageUrl: "https://yourdomain.com/uploads/momo.jpg",
      createdAt: "2026-02-17T12:30:00.000Z",
    },
  ]);
  const [menus, setMenus] = useState([
    {
      id: 1,
      name: "Pizza",
      description: "Delicious cheesy pizzas",
      category: "Pizza",
      basePrice: 250,
      status: "available",
      variantGroups: [
        {
          groupName: "Size",
          required: true,
          multiSelect: false,
          options: [
            { name: "Small", price: 0 },
            { name: "Medium", price: 50 },
            { name: "Large", price: 100 },
          ],
        },
      ],
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500",
    },
    // Add more menu items here
  ]);

  const calculateMenuPrice = (menu) => {
    let extra = 0;
    menu.variantGroups.forEach((group) => {
      group.options.forEach((opt) => {
        if (opt.price) extra += Number(opt.price);
      });
    });
    return Number(menu.basePrice) + extra;
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header  */}
        <Header />

        <StatsCard />

        {/* tabs  */}
        <MenuTabs activeTab={activeTab} setSearchParams={setSearchParams} />

        {/* search, filter, add btn  */}
        <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left Side (Search + Filter) */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 w-full">
            {/* Search */}
            <div className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-md bg-gray-50 w-full md:w-[260px]">
              <Search size={18} className="text-gray-500" />
              <input
                className="border-none bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-400"
                type="text"
                placeholder={
                  activeTab === "categories"
                    ? "Search Categories..."
                    : "Search menu items..."
                }
              />
            </div>

            {/* Filter */}
            {activeTab === "menus" && (
              <select className="border border-gray-200 px-3 py-2 text-sm w-full md:w-[220px] rounded-md bg-white outline-none">
                <option>All Category</option>
                <option>Pizza</option>
                <option>Burger</option>
                <option>Drinks</option>
              </select>
            )}
          </div>

          {/* Right Side (Buttons) */}
          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            {/* Grid Table Toggle */}
            <div className="flex  border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 transition ${
                  viewMode === "table"
                    ? "bg-orange-100 text-orange-500"
                    : "text-gray-600"
                }`}
              >
                <Table2 size={18} />
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 transition ${
                  viewMode === "grid"
                    ? "bg-orange-100 text-orange-500"
                    : "text-gray-600"
                }`}
              >
                <LayoutGrid size={18} />
              </button>
            </div>

            {/* Add Button */}
            {activeTab === "categories" ? (
              <button
                onClick={() => setShowCategoryModal(true)}
                className="bg-orange-500 hover:bg-orange-600 transition flex gap-2 text-white items-center justify-center px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap"
              >
                <Plus size={18} /> Add Category
              </button>
            ) : (
              <button
                onClick={() => setShowMenuModal(true)}
                className="bg-orange-500 hover:bg-orange-600 transition flex gap-2 text-white items-center justify-center px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap"
              >
                <Plus size={18} /> Add Menu
              </button>
            )}
          </div>
        </div>

        {activeTab === "categories" ? (
          <>
            {viewMode === "table" ? (
              <CategoryTable categories={categories} />
            ) : (
              <CategoryGrid />
            )}
          </>
        ) : (
          <>{viewMode === "table" ? <MenuTable /> : <MenuGrid />}</>
        )}
      </div>

      {showCategoryModal && (
        <CategoryModal setShowCategoryModal={setShowCategoryModal} />
      )}

      {showMenuModal && <MenuModal setShowMenuModal={setShowMenuModal} />}
    </>
  );
};

export default Menu;
