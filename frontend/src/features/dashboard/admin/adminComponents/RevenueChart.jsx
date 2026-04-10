import React from "react";
import ChartHeader from "./ChartHeader";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "../../../../components/chartTootTip";

const RevenueChart = () => {
  const revenueData = [
    { day: "Mon", revenue: 8200, orders: 34 },
    { day: "Tue", revenue: 11400, orders: 48 },
    { day: "Wed", revenue: 7800, orders: 31 },
    { day: "Thu", revenue: 14200, orders: 57 },
    { day: "Fri", revenue: 13100, orders: 52 },
    { day: "Sat", revenue: 18900, orders: 76 },
    { day: "Sun", revenue: 15600, orders: 63 },
  ];
  
  return (
    <>
      <div className=" bg-white rounded-md border border-gray-100 shadow-md px-4 py-5">
        <div className="flex items-center justify-between">
          <ChartHeader
            title="Revenue & Orders"
            subTitle="This week's  performance"
          />
          <select className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 outline-none text-gray-500 bg-white">
            <option>This Week</option>
            <option>Last Week</option>
            <option>This Month</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <AreaChart
            data={revenueData}
            margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#f97316"
              strokeWidth={2.5}
              fill="url(#revGrad)"
              dot={{ r: 4, fill: "#f97316", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="orders"
              name="Orders"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#ordGrad)"
              dot={{ r: 3, fill: "#3b82f6", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>

      
      </div>
    </>
  );
};

export default RevenueChart;
