import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";

const StatCard = ({
  icon: Icon,
  label,
  value,
  change,
  positive,
  color,
  sub,
}) => {
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">{label}</span>
          <div className={`p-2.5 rounded-xl ${color}`}>
            <Icon size={17} className="text-white" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900 tracking-tight">
            {value}
          </p>
          {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium">
          {positive ? (
            <span className="flex items-center gap-0.5 text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
              <ArrowUpRight size={12} /> {change}
            </span>
          ) : (
            <span className="flex items-center gap-0.5 text-red-400 bg-red-50 px-2 py-0.5 rounded-full">
              <ArrowDownRight size={12} /> {change}
            </span>
          )}
          <span className="text-gray-400 font-normal">vs yesterday</span>
        </div>
      </div>
    </>
  );
};

export default StatCard;
