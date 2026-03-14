import { X } from "lucide-react";
import React, { useState } from "react";

const ConfirmLogout = ({ onCancel }) => {
  return (
    <>
      <div className="fixed inset-0 z-99 flex items-center justify-center ">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative bg-white w-[90%] max-w-sm rounded-lg shadow-lg p-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Logout</h2>
            <X onClick={onCancel} className="h-6 w-6 " />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Are your sure you want to logout?{" "}
          </p>
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onCancel}
              className="border px-4 py-2 rounded-lg  hover:scale-105 transition duration-300"
            >
              Cancel
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:scale-105 transition duration-300">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmLogout;
