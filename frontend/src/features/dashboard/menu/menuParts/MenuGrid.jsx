import { Pencil, Trash2 } from "lucide-react";
import React from "react";
const filteredMenus = [
  {
    _id: "menu001",
    name: "Chicken Momo",
    description: "Juicy chicken momo with spicy achar",
    category: { _id: "cat001", name: "Momo" },
    status: "available",
    price: 180,
    variants: [],
    imageUrl:
      "https://images.unsplash.com/photo-1604908554162-4f6e8a6b6b24?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "menu002",
    name: "Veg Pizza",
    description: "Cheesy pizza loaded with fresh veggies",
    category: { _id: "cat002", name: "Pizza" },
    status: "available",
    price: 0,
    variants: [
      { name: "Small", price: 350 },
      { name: "Medium", price: 550 },
      { name: "Large", price: 750 },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1601924582975-7c5c6f0f0b41?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "menu003",
    name: "Chicken Burger",
    description: "Crispy chicken burger with fries combo",
    category: { _id: "cat003", name: "Burger" },
    status: "unavailable",
    price: 320,
    variants: [],
    imageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
];

const MenuGrid = ({ menus, onDelete, onEdit }) => {

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {menus.map((menu) => (
          <div
            key={menu._id}
            className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="h-40 w-full bg-gray-100">
              {menu.imageUrl && (
                <img
                  src={menu.imageUrl}
                  alt={menu.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="p-5 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {menu.name}
                  </h2>
                  <p className="text-sm text-gray-500">{menu.description}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Category:
                    <span className="font-medium text-gray-800">
                      {menu.category}
                    </span>
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    menu.status === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {menu.status}
                </span>
              </div>

              {/* Price / Variants */}
              {menu.variants?.length > 0 ? (
                <div className="border border-gray-200 bg-gray-50 rounded-md p-3 space-y-2">
                  <p className="text-sm font-semibold text-gray-800">
                    Variants
                  </p>
                  {menu.variants.map((v, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-sm text-gray-700"
                    >
                      <span>{v.name}</span>
                      <span className="font-semibold">Rs. {v.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xl font-bold text-gray-900">
                  Rs. {menu.basePrice}
                </p>
              )}

              <div className="flex justify-between items-center pt-3 border-t">
                <button
                  onClick={() => onEdit(menu)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
                >
                  <Pencil size={18} />
                  Edit
                </button>

                <button
                  onClick={() => onDelete(menu._id, "menu")}
                  className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700"
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuGrid;
