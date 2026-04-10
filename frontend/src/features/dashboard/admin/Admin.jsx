import React from "react";
import StatCard from "../../../components/StatCard";
import { DollarSign, ShoppingBag, Users, UtensilsCrossed } from "lucide-react";
import RevenueChart from "./adminComponents/RevenueChart";
import OrderStatusChart from "./adminComponents/OrderStatusChart";
import RecentOrders from "./adminComponents/RecentOrders";
import TopSellingItems from "./adminComponents/TopSellingItems";

const Admin = () => {
  return (
    <>
      <div className="space-y-5 ">
        {/* stats card  */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 ">
          <StatCard
            icon={DollarSign}
            label="Today's Revenue"
            value="Rs. 18,940"
            change="+12.4%"
            positive
            color="bg-orange-500"
            sub="Rs. 16,850 yesterday"
          />
          <StatCard
            icon={ShoppingBag}
            label="Total Orders"
            value="89"
            change="+7 orders"
            positive
            color="bg-blue-500"
            sub="63 delivered · 18 active"
          />
          <StatCard
            icon={UtensilsCrossed}
            label="Avg. Order Value"
            value="Rs. 1,248"
            change="+5.1%"
            positive
            color="bg-violet-500"
            sub="Per order today"
          />
          <StatCard
            icon={Users}
            label="Customers Today"
            value="74"
            change="-3"
            positive={false}
            color="bg-emerald-500"
            sub="18 new · 56 returning"
          />
        </div>

        {/* Revenue Area Chart + Order status pie  */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 ">
            <RevenueChart />
          </div>
          <div className=" lg:col-span-4 ">
            <OrderStatusChart />
          </div>
        </div>

        {/* recent orders  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className=" lg:col-span-8">
            <RecentOrders />
          </div>
          <div className="lg:col-span-4">
            <TopSellingItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
