import React from "react";
import ChartHeader from "./ChartHeader";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const OrderStatusChart = () => {
  const orderStatusData = [
    { name: "Delivered", value: 68, color: "#22c55e" },
    { name: "Preparing", value: 18, color: "#f97316" },
    { name: "Cancelled", value: 8, color: "#ef4444" },
    { name: "Pending", value: 6, color: "#eab308" },
  ];
  return (
    <>
      <div className="bg-white rounded-md border border-gray-100 shadow-md px-4 py-5">
        <ChartHeader title="Order Status" subTitle="Today's breakdown" />

        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie data={orderStatusData} dataKey="value">
              {orderStatusData.map((entry, i) => (
                <Cell fill={entry.color} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => `${v}%`} />
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-2 mt-2">
          {orderStatusData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-600">{item.name}</span>
              </div>
              <span className="font-semibold text-gray-700">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderStatusChart;
