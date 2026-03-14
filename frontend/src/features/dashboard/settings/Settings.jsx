import { Plus, Star } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    _id: "m001",
    name: "Steam Momo",
    description: "Juicy chicken filling, ginger-garlic blend",
    price: 130,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc500f?w=400",
    rating: 4.8,
    isVeg: false,
    isSpicy: false,
    isBestseller: true,
  },
  {
    _id: "m002",
    name: "Fried Momo",
    description: "Crispy fried, spicy achar dip",
    price: 150,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
    rating: 4.6,
    isVeg: false,
    isSpicy: true,
    isBestseller: false,
  },
  {
    _id: "m003",
    name: "Veg Burger",
    description: "Crispy patty, lettuce, tomato sauce",
    price: 180,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
    rating: 4.4,
    isVeg: true,
    isSpicy: false,
    isBestseller: false,
  },
  {
    _id: "m004",
    name: "Spicy Chowmein",
    description: "Wok-tossed noodles, fresh veggies",
    price: 120,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
    rating: 4.5,
    isVeg: true,
    isSpicy: true,
    isBestseller: true,
  },
  {
    _id: "m005",
    name: "Cheese Pizza",
    description: "Mozzarella, tomato base, oregano",
    price: 350,
    image: "https://images.unsplash.com/photo-1601924582975-7e1c8fdd2d46?w=400",
    rating: 4.9,
    isVeg: true,
    isSpicy: false,
    isBestseller: true,
  },
  {
    _id: "m006",
    name: "Chicken Burger",
    description: "Grilled chicken, coleslaw, mayo",
    price: 220,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    rating: 4.7,
    isVeg: false,
    isSpicy: false,
    isBestseller: false,
  },
];

const MenuCard = ({ item }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(1);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c <= 1 ? 0 : c - 1));

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "72%" }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {item.isBestseller && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            🔥 Bestseller
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-2.5 flex flex-col gap-1 flex-1">
        {/* Veg/NonVeg dot */}
        <div className="flex items-center gap-1.5">
          <div
            className={`w-3 h-3 rounded-sm border-2 flex items-center justify-center flex-shrink-0 ${
              item.isVeg ? "border-green-500" : "border-red-500"
            }`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                item.isVeg ? "bg-green-500" : "bg-red-500"
              }`}
            />
          </div>
          {item.isSpicy && (
            <span className="text-[10px] text-red-500">🌶 Spicy</span>
          )}
        </div>

        {/* Name */}
        <p className="text-[13px] font-bold text-gray-900 leading-tight">
          {item.name}
        </p>

        {/* Description */}
        <p className="text-[10.5px] text-gray-400 leading-snug line-clamp-2">
          {item.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star size={10} fill="#FBBF24" color="#FBBF24" />
          <span className="text-[10px] text-gray-500 font-semibold">
            {item.rating}
          </span>
        </div>

        {/* Price + Add Button */}
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-sm font-extrabold text-gray-900">
            <span className="text-[10px] font-semibold text-gray-500">
              NPR{" "}
            </span>
            {item.price}
          </span>

          {count === 0 ? (
            <button
              onClick={handleAdd}
              className="flex items-center gap-0.5 border-[1.5px] border-orange-500 text-orange-500 text-[11px] font-bold px-3 py-1 rounded-lg active:bg-orange-500 active:text-white transition-colors"
            >
              <Plus size={11} />
              Add
            </button>
          ) : (
            <div className="flex items-center bg-orange-500 rounded-lg overflow-hidden">
              <button
                onClick={decrement}
                className="text-white text-sm font-bold px-2.5 py-1 active:bg-orange-600 transition-colors"
              >
                −
              </button>
              <span className="text-white text-xs font-bold min-w-[18px] text-center">
                {count}
              </span>
              <button
                onClick={increment}
                className="text-white text-sm font-bold px-2.5 py-1 active:bg-orange-600 transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MenuGrid = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <p className="text-[15px] font-extrabold text-gray-900 mb-3 tracking-tight">
        Our Menu
      </p>
      <div className="grid grid-cols-2 gap-3">
        {menuItems.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
  