import { Minus, Plus, Star } from "lucide-react";
import { useEffect, useState } from "react";

const MenuList = ({ menuItems, cart, handleAddToCart, decreaseQty }) => {
  // ✅ Get cart item helper
  const getCartItem = (id) => {
    return cart.find((item) => item._id === id);
  };

  // ✅ Calculate Total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  return (
    <>
      <div className="max-w-7xl mx-auto  p-4 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-white overflow-hidden gap-3 ">
          {menuItems.map((menu) => {
            const cartItem = getCartItem(menu._id);
            return (
              <div
                key={menu._id}
                className="red-500 bg-white shadow-sm border border-gray-100 rounded-md  overflow-hidden"
              >
                <div className="h-30 w-full overflow-hidden">
                  <img
                    src={menu.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* memu content  */}

                <div className=" p-2 flex flex-col gap-1">
                  <div className="w-3 h-3 rounded-sm border-2 border-green-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>

                  <h1 className="font-bold text-sm">{menu.name}</h1>
                  <p className="text-sm  text-gray-400 leading-snug line-clamp-1">
                    {menu.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star size={14} fill="#FBBF24" color="#FBBF24" />
                    <span className="text-sm text-gray-500 font-semibold">
                      {menu.rating}
                    </span>
                  </div>

                  {/* price + Add Button  */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold ">
                      <span className="">NRP </span> {menu.price}
                    </span>
                    {cartItem ? (
                      <div className="flex items-center gap-2.5 text-white bg-orange-500  py-1 rounded-md px-2">
                        <button
                          className=" rounded "
                          onClick={() => decreaseQty(menu._id)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-semibold">{cartItem.qty}</span>
                        <button
                          className=" rounded "
                          onClick={() => handleAddToCart(menu)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(menu)}
                        className="flex items-center gap-0.5 border border-orange-500 text-orange-500 text-xs font-bold px-3 py-1 rounded-lg active:bg-orange-500 active:text-white transition-colors "
                      >
                        <Plus size={11} /> Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuList;
