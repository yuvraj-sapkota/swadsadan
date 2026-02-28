import { MapPin, Plus, Search, Star } from "lucide-react";
import OfferSlider from "./restaurantPageLayoutPart/OfferSlider";
import { useEffect, useState } from "react";
import MenuList from "./restaurantPageLayoutPart/MenuList";
import BottomCartBar from "./restaurantPageLayoutPart/BottomCartBar";

const categories = [
  {
    _id: "cat001",
    name: "All",
    description: "Delicious cheesy pizza items",
    status: "active",
    priority: 1,
    image: "https://images.unsplash.com/photo-1601924582975-7e1c8fdd2d46?w=500",
    createdAt: "2026-02-18",
  },
  {
    _id: "cat002",
    name: "Burger",
    description: "Tasty burger with fries",
    status: "active",
    priority: 2,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
    createdAt: "2026-02-18",
  },
  {
    _id: "cat003",
    name: "Momo",
    description: "Nepali style momo varieties",
    status: "hidden",
    priority: 3,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc500f?w=500",
    createdAt: "2026-02-18",
  },
  {
    _id: "cat004",
    name: "Chowmein",
    description: "Spicy chowmein noodles",
    status: "active",
    priority: 4,
    image: "https://images.unsplash.com/photo-1604908554027-2f36f9c6c4b1?w=500",
    createdAt: "2026-02-18",
  },
  {
    _id: "cat005",
    name: "Pizza",
    description: "Delicious cheesy pizza items",
    status: "active",
    priority: 1,
    image: "https://images.unsplash.com/photo-1601924582975-7e1c8fdd2d46?w=500",
    createdAt: "2026-02-18",
  },
  {
    _id: "cat006",
    name: "Burger",
    description: "Tasty burger with fries",
    status: "active",
    priority: 2,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
    createdAt: "2026-02-18",
  },
  {
    _id: "cat007",
    name: "Momo",
    description: "Nepali style momo varieties",
    status: "hidden",
    priority: 3,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc500f?w=500",
    createdAt: "2026-02-18",
  },
  {
    _id: "cat008",
    name: "Chowmein",
    description: "Spicy chowmein noodles",
    status: "active",
    priority: 4,
    image: "https://images.unsplash.com/photo-1604908554027-2f36f9c6c4b1?w=500",
    createdAt: "2026-02-18",
  },
];

const menuItems = [
  {
    _id: "m001",
    name: "Steam Momo",
    description: "Juicy chicken filling, ginger-garlic blend",
    price: 130,
    image:
      "https://i.pinimg.com/1200x/a7/ab/25/a7ab25cbac950579cecb4a8da5caafbf.jpg",
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
    image:
      "https://i.pinimg.com/736x/da/d7/b1/dad7b1540b669667091d687ab2b51dbf.jpg",
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
  {
    _id: "m007",
    name: "Cheese Pizza",
    description: "Mozzarella, tomato base, oregano",
    price: 350,
    image:
      "https://i.pinimg.com/736x/da/d7/b1/dad7b1540b669667091d687ab2b51dbf.jpg",
    rating: 4.9,
    isVeg: true,
    isSpicy: false,
    isBestseller: true,
  },
  {
    _id: "m008",
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

const restaurantPageLayout = () => {
  const [orderType, setOrderType] = useState("table");
  const [activeCategory, setActiveCategory] = useState("cat001");

  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.log("Invalid JSON in localStorage. Resetting cart.");
      localStorage.removeItem("cart");
      return [];
    }
  });

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart
  const handleAddToCart = (menu) => {
    if (!menu || !menu._id) return;

    setCart((prev) => {
      const existingItem = prev.find((item) => item._id == menu._id);

      if (existingItem) {
        return prev.map((item) =>
          item._id === menu._id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...prev, { ...menu, qty: 1 }];
    });
  };
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id ? { ...item, qty: item.qty - 1 } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="shadow-sm rounded-b-2xl p-2 space-y-4 ">
          <div className="space-y-6 flex flex-col md:flex-row md:items-start md:justify-between">
            {/* restaurant infor  */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-20 w-20 rounded-md ">
                  <img
                    className="h-full w-full object-cover"
                    src="https://merokinmel.com/storage/category/icon/60f1526ed2563.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-2xl">Restaurant Name</h2>
                  <p className="flex items-center gap-2 text-sm">
                    <MapPin size={18} /> Bhairahawa-13, Siddharthanagar, Lumbini
                  </p>
                </div>
              </div>
              <div className="flex  justify-between  sm:gap-10 sm:justify-start">
                <div className="flex flex-col justify-center items-center gap-1">
                  <p className="flex items-center gap-1 justify-center w-fit p-1 font-semibold rounded-md bg-green-500 text-white text-xs ">
                    4.7 <Star size={14} />
                  </p>
                  <p className="text-xs text-gray-500">417 ratings</p>
                </div>
                <div className="border border-gray-200"></div>
                <div className="flex items-center flex-col gap-1  ">
                  <p className="font-semibold text-xs">Timing</p>
                  <p className="text-xs text-gray-500">9:00AM - 10:00 PM</p>
                </div>
                <div className="border border-gray-200"></div>
                <div className="flex items-center flex-col gap-1  ">
                  <p className="font-semibold text-xs">Mini Order</p>
                  <p className="text-xs text-gray-500">NRS 100</p>
                </div>
              </div>
            </div>
            {/* order type  */}
            <div
              className={`border border-gray-200 p-1 rounded-md flex gap-2  w-fit`}
            >
              <button
                onClick={() => setOrderType("table")}
                className={` px-6 py-2 rounded-md text-xs ${
                  orderType === "table"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Table
              </button>
              <button
                onClick={() => setOrderType("packed")}
                className={` px-6 py-2 rounded-md text-xs ${
                  orderType === "packed"
                    ? "bg-green-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Packed
              </button>
            </div>
          </div>
          {/* offer slider  */}
          <OfferSlider />
        </div>
      </div>

      <div className=" sticky top-0 mt-6 py-2 bg-white ">
        {/* search bar  */}
        <div className="   max-w-7xl mx-auto  px-4 bg-white">
          <div className="flex relative">
            <Search className="absolute left-2 text-gray-400 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search for dished...."
              className="border border-gray-200 rounded-md px-10 py-3 focus:outline-orange-500 outline-none w-full"
            />
          </div>
        </div>

        {/* category div  */}
        <div className=" mt-3 bg-orange-100 py-2 px-4 overflow-x-auto scrollbar-hide ">
          <div className="max-w-7xl mx-auto ">
            <ul className="flex  gap-6 ">
              {categories.map((cat) => (
                <li
                  onClick={() => setActiveCategory(cat._id)}
                  className={` px-2 rounded-md text-lg  ${
                    activeCategory === cat._id
                      ? "text-white  bg-orange-500"
                      : "text-gray-500"
                  }`}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* mneu list  */}
      <MenuList
        menuItems={menuItems}
        cart={cart}
        handleAddToCart={handleAddToCart}
        decreaseQty={decreaseQty}
      />

      {cart.length > 0 && <BottomCartBar />}
    </>
  );
};

export default restaurantPageLayout;
