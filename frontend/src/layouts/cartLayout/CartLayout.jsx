import React, { useState } from "react";
import { ChevronDown, Minus, Plus, Trash2, ChevronRight } from "lucide-react";
import CartHeader from "../../features/restaurant/cart/components/CartHeader";
import CartRestaurantCard from "../../features/restaurant/cart/components/CartRestaurantCard";
import CartList from "../../features/restaurant/cart/components/CartList";
import CartSummary from "../../features/restaurant/cart/components/CartSummary";

const CartLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          {/* cart header  */}
          <CartHeader />
          <div className="border border-gray-200 shadow-sm rounded-md">
            {/* cartRestaurantCard  */}
            <CartRestaurantCard isOpen={isOpen} setIsOpen={setIsOpen} />

            {isOpen && (
              <>
                <CartList />

                <CartSummary />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartLayout;
