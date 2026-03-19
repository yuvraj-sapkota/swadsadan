import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="max-w-7xl px-4 pb-24 mx-auto">
        <div className="flex items-center justify-center gap-6 flex-col mt-10">
          {/* Text  */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h1 className="text-center text-4xl sm:text-5xl  lg:text-6xl  font-bold">
              Your Restaurant, fully
              <span className="text-orange-500"> digital</span>
            </h1>
            <p className="text-center text-gray-400 text-sm sm:text-base">
              QR-based ordering, real-time kitchen dashboard, and seamless
              payments — everything your restaurant needs in one place.
            </p>
          </div>

          <div className="flex items-center gap-4  flex-wrap justify-center">
            <button className=" px-6 py-2 rounded-md font-semibold  bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-4">
              <span>Start for free</span>
              <ArrowRight size={18} />
            </button>
            <Link
              to="/login"
              className="border border-gray-300 hover:bg-gray-100 px-5 py-2 rounded-md font-semibold text-gray-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
