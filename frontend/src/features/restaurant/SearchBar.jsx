import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <>
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
    </>
  );
};

export default SearchBar;
