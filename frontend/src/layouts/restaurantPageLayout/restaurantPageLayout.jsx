import { MapPin, Plus, Search, Star } from "lucide-react";
import OfferSlider from "./restaurantPageLayoutPart/OfferSlider";
import { useEffect, useState } from "react";
import MenuList from "./restaurantPageLayoutPart/MenuList";
import BottomCartBar from "./restaurantPageLayoutPart/BottomCartBar";
import RestaurantHeader from "./restaurantPageLayoutPart/RestaurantHeader";
import OrderTypeToggle from "./restaurantPageLayoutPart/OrderTypeToggle";
import SearchBar from "./restaurantPageLayoutPart/SearchBar";
import CategoryTabs from "./restaurantPageLayoutPart/CategoryTabs";

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

  const cartSummary = cart.reduce(
    (acc, item) => {
      acc.totalQty += item.qty;
      acc.totalPrice += item.qty * item.price;
      return acc;
    },
    { totalQty: 0, totalPrice: 0 },
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="shadow-sm rounded-b-2xl p-2 space-y-4 ">
          <div className="space-y-6 flex flex-col md:flex-row md:items-start md:justify-between">
            {/* restaurant infor  */}
            <RestaurantHeader />
            {/* order type  */}
            <OrderTypeToggle
              orderType={orderType}
              setOrderType={setOrderType}
            />
          </div>
          {/* offer slider  */}
          <OfferSlider />
        </div>
      </div>

      <div className=" sticky top-0 mt-6 py-2 bg-white ">
        {/* search bar  */}
        <SearchBar />
        {/* category div  */}
        <CategoryTabs categories={categories} activeCategory={activeCategory} />
      </div>

      {/* mneu list  */}

      <MenuList
        menuItems={menuItems}
        cart={cart}
        handleAddToCart={handleAddToCart}
        decreaseQty={decreaseQty}
      />

      {cart.length > 0 && (
        <BottomCartBar
          totalQty={cartSummary.totalQty}
          totalPrice={cartSummary.totalPrice}
        />
      )}
    </>
  );
};

export default restaurantPageLayout;
