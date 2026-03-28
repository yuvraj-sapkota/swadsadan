import React from "react";
import { ChevronRight } from "lucide-react";
const CartSummary = () => {
  return (
    <>
      <div className="flex justify-between px-2 py-6 items-center">
        <div>
          <p>
            <span className="font-medium">Total:</span> NRS 150
          </p>
        </div>
        <div>
          <button className="bg-green-500 text-white py-4 px-4 rounded-md font-bold flex items-center gap-1 justify-center text-sm">
            Cheeckout <ChevronRight size={18} />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
