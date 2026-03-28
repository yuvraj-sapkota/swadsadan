import React from "react";

const CartHeader = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-medium">Your cart items</h1>
        <p className="text-gray-400 text-xs sm:text-sm mt-1 mx-2">
          <span className="text-gray-500 font-bold">Note: </span>Please note
          that you can only check out from one restaurant at a time. Kindly
          complete your order from one restaurant before proceeding to checkout
        </p>
      </div>
    </>
  );
};

export default CartHeader;
