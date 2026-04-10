import React from "react";
import ChartHeader from "./ChartHeader";
import { TrendingDown, TrendingUp } from "lucide-react";

const TopSellingItems = () => {
  const topItems = [
    { name: "Momo (Steamed)", orders: 142, trend: "up" },
    { name: "Dal Bhat Set", orders: 118, trend: "up" },
    { name: "Chicken Chowmein", orders: 97, trend: "down" },
    { name: "Buff Sekuwa", orders: 84, trend: "up" },
    { name: "Thukpa", orders: 71, trend: "down" },
  ];
  return (
    <>
      <div className="shadow-sm p-4 w-full h-full bg-white border border-gray-100 rounded-md">
        <ChartHeader title="Top Selling Items" subTitle="Today's bestsellers" />

        <div className="space-y-3">
          {topItems.map((item, i) => (
            <div key={item.name} className="flex items-center gap-3">
              <span
                className={`text-xs font-bold w-5 shrink-0 ${
                  i === 0 ? "text-orange-500" : "text-gray-300"
                }`}
              >
                #{i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-700 truncate">
                  {item.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-orange-400 h-1.5 rounded-full transition-all"
                      style={{
                        width: `${(item.orders / topItems[0].orders) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 shrink-0">
                    {item.orders}
                  </span>
                </div>
              </div>
              <span
                className={`shrink-0 ${
                  item.trend === "up" ? "text-green-500" : "text-red-400"
                }`}
              >
                {item.trend === "up" ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopSellingItems;
