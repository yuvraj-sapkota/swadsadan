import { LayoutGrid, Plus, Search, Table2 } from "lucide-react";
import StatsCard from "./menuParts/StatsCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./menuParts/Header";
import CategoryModal from "./category/CategoryModal";
import MenuModal from "./menuParts/MenuModal";
import MenuTabs from "./menuParts/MenuTabs";
import CategoryTable from "./category/CategoryTable";
import CategoryGrid from "./category/CategoryGrid";
import MenuTable from "./menuParts/MenuTable";
import MenuGrid from "./menuParts/MenuGrid";
import { getMenu } from "../../../services/menu/menuApi";
import {
  deleteOne,
  getCategories,
} from "../../../services/category/categoryApi";
import ConfirmDeleteModel from "../../../components/ConfirmDeleteModel";
import { toast } from "sonner";
const Menu = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "categories";
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [page, setpage] = useState(1);
  const limit = 20;

  const [menus, setMenus] = useState([]);

  const calculateMenuPrice = (menu) => {
    let extra = 0;
    menu.variantGroups.forEach((group) => {
      group.options.forEach((opt) => {
        if (opt.price) extra += Number(opt.price);
      });
    });
    return Number(menu.basePrice) + extra;
  };

  const fetchMenus = async ({
    page = 1,
    search = "",
    category = "",
    append = false,
  } = {}) => {
    try {
      const res = await getMenu({ page, limit, search, category });
      const data = res.data;
      if (data.success) {
        setMenus((prev) => (append ? [...prev, ...data.items] : data.items));

        setHasMore(data.items?.length === limit);
      }
    } catch (error) {
      console.log("Error while fetching menu", error);
    }
  };

  // search
  useEffect(() => {
    const delay = setTimeout(() => {
      setpage(1);
      fetchMenus({
        page: 1,
        search,
        category: categoryFilter,
      });
    }, 400);
    return () => clearTimeout(delay);
  }, [search]);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      console.log(res);
      setCategories(res.data.items);
    } catch (error) {
      console.log("Category fetch error", error);
    }
  };
  // console.log(categories);

  const handleEditClick = (category) => {
    setShowCategoryModal(true);
    setSelectedCategory(category);
  };

  const cancleEditClick = () => {
    setSelectedCategory(null);
    setShowCategoryModal(false);
  };

  const handleDeleteClick = async (id) => {
    setDeleteId(id);
  };

  const confirmDeleteCategory = async () => {
    try {
      setDeleteLoading(true);
      const res = await deleteOne(deleteId);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      fetchCategories();
      setDeleteId(null);
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete category");
    } finally {
      setDeleteLoading(false);
    }
  };

  const cancleDeleteCategory = () => {
    setDeleteId(null);
  };

  useEffect(() => {
    fetchMenus({ page: 1 });
    fetchCategories();
  }, []);
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
              <select
                value={categoryFilter}
                onChange={(e) => {
                  const value = e.target.value;
                  setCategoryFilter(value);
                  setpage(1);
                  fetchMenus({ page: 1, search, category: value });
                }}
                className="border border-gray-200 px-3 py-2 text-sm w-full md:w-[220px] rounded-md bg-white outline-none"
              >
                <option>All Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
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
              <CategoryTable
                categories={categories}
                onDelete={handleDeleteClick}
                onEdit={handleEditClick}
              />
            ) : (
              <CategoryGrid
                categories={categories}
                onDelete={handleDeleteClick}
                onEdit={handleEditClick}
              />
            )}
          </>
        ) : (
          <>
            {viewMode === "table" ? <MenuTable /> : <MenuGrid menus={menus} />}
          </>
        )}
      </div>

      {showCategoryModal && (
        <CategoryModal
          setShowCategoryModal={setShowCategoryModal}
          fetchCategories={fetchCategories}
          selectedCategory={selectedCategory}
          onCancle={cancleEditClick}
        />
      )}

      {showMenuModal && (
        <MenuModal
          setShowMenuModal={setShowMenuModal}
          categories={categories}
        />
      )}

      {deleteId && (
        <ConfirmDeleteModel
          onConfirm={confirmDeleteCategory}
          onCancel={cancleDeleteCategory}
          loading={deleteLoading}
        />
      )}
    </>
  );
};

export default Menu;
