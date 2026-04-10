import React from "react";
import ChartHeader from "./ChartHeader";
import { CheckCircle2, ChefHat, Clock, RefreshCw, XCircle } from "lucide-react";
import StatusBadge from "./StatusBadge";
const RecentOrders = () => {
  const recentOrders = [
    {
      id: "#ORD-4821",
      customer: "Arjun Shrestha",
      items: 3,
      amount: 1250,
      status: {
        label: "Delivered",
        color: "bg-green-50 text-green-600",
        icon: <CheckCircle2 size={13} />,
      },
      time: "2 min ago",
    },
    {
      id: "#ORD-4820",
      customer: "Priya Thapa",
      items: 2,
      amount: 780,

      status: {
        label: "Preparing",
        color: "bg-orange-50 text-orange-600",
        icon: <ChefHat size={13} />,
      },

      time: "8 min ago",
    },
    {
      id: "#ORD-4819",
      customer: "Rajesh KC",
      items: 5,
      amount: 2340,
      status: {
        label: "Pending",
        color: "bg-yellow-50 text-yellow-600",
        icon: <Clock size={13} />,
      },

      time: "12 min ago",
    },
    {
      id: "#ORD-4818",
      customer: "Sunita Maharjan",
      items: 1,
      amount: 450,
      status: {
        label: "Cancelled",
        color: "bg-red-50 text-red-600",
        icon: <XCircle size={13} />,
      },

      time: "18 min ago",
    },
  ];
  return (
    <>
      <div className="shadow-sm p-4 w-full bg-white border border-gray-100 rounded-md">
        <div className="flex items-center justify-between mb-5">
          <ChartHeader title="Recent Orders" subTitle="Live updates" />

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </span>
            <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition">
              <RefreshCw size={14} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
                <th className="pb-3 font-medium">Order Id</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition duration200"
                >
                  <td className="py-3 font-mono text-xs text-gray-400">
                    {order.id}
                  </td>
                  <td className="py-3 font-medium text-xs text-gray-700">
                    {order.customer}
                  </td>
                  <td className="py-3 text-gray-500 text-xs ">
                    {order.items} items
                  </td>
                  <td className="py-3 font-semibold text-xs text-gray-800">
                    Rs. {order.amount.toLocaleString()}
                  </td>
                  <td className="py-3">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-3 text-xs text-gray-400">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentOrders;
