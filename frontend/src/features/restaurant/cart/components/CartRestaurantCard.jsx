import React from "react";
import { ChevronDown } from "lucide-react";

const CartRestaurantCard = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start justify-between gap-4 px-2 py-4"
      >
        <div className="flex  items-start gap-4">
          <div className="hidden md:block h-15 w-15 rounded-md overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://images.squarespace-cdn.com/content/v1/56bbba188a65e26b26e030bc/1694643885363-KHU5L14DE3PCJ190JDDQ/Baxter_Imaging_Dining_Nobu_Scottsdale_01.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-gray-500 ">1 items</p>
            <h2 className="font-semibold">Restaurant Name</h2>
          </div>
        </div>

        <button
          className={`transition duration-200 ease-in-out ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <ChevronDown />
        </button>
      </div>
    </>
  );
};

export default CartRestaurantCard;
