import { ArrowRight, TrendingUp } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="rounded-md bg-gradient-to-br from-amber-600 to-orange-600 p-10 text-center text-white">
          <TrendingUp size={32} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-2">Ready to go digital?</h2>
          <p className="text-amber-100 text-sm mb-6 max-w-sm mx-auto">
            Register your restaurant in under 5 minutes and start accepting
            digital orders today.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-amber-700 text-sm font-semibold rounded-xl hover:bg-amber-50 transition-colors">
            Register your restaurant
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
