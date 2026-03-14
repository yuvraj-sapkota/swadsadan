import React from "react";

const OrderTypeToggle = ({orderType, setOrderType}) => {
  return (
    <>
      <div
        className={`border border-gray-200 p-1 rounded-md flex gap-2  w-fit`}
      >
        <button
          onClick={() => setOrderType("table")}
          className={` px-6 py-2 rounded-md text-xs ${
            orderType === "table" ? "bg-green-500 text-white" : "bg-gray-100"
          }`}
        >
          Table
        </button>
        <button
          onClick={() => setOrderType("packed")}
          className={` px-6 py-2 rounded-md text-xs ${
            orderType === "packed" ? "bg-green-500 text-white" : "bg-gray-100"
          }`}
        >
          Packed
        </button>
      </div>
    </>
  );
};

export default OrderTypeToggle;
