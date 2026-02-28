import { EyeOff, Pencil, Trash2 } from "lucide-react";
import React from "react";

const CategoryGrid = () => {
  return (
    <>
      <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="border-2 bg-white border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="h-40 w-full">
            <img
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* item details  */}
          <div className="p-4 space-y-3">
            <div className="">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg text-gray-900">Pizza</h2>
                  <p className="text-gray-500 text-sm">
                    Delicious cheesy pizzas
                  </p>
                </div>
                <span className="bg-green-100 px-3 py-1 rounded-md text-green-700 text-xs">
                  active
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Priority:
                <span className="font-semibold text-gray-900"> 1</span>
              </p>
              <p className="text-sm text-gray-600">
                Items:
                <span className="font-semibold text-gray-900"> 1</span>
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-300">
              <div>
                <button className="text-gray-600 hover:text-gray-900 flex gap-2 items-center">
                  <EyeOff size={18} /> Hide
                </button>
              </div>
              <div className="flex gap-2">
                <button className="border border-gray-200 rounded-md p-2 hover:bg-gray-100">
                  <Pencil size={18} className="text-gray-600" />
                </button>
                <button className="border border-gray-200 rounded-md p-2 hover:bg-red-100">
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryGrid;
