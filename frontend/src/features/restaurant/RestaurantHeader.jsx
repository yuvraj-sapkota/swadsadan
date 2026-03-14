import { MapPin, Star } from "lucide-react";

const RestaurantHeader = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-20 w-20 rounded-md ">
            <img
              className="h-full w-full object-cover"
              src="https://merokinmel.com/storage/category/icon/60f1526ed2563.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Restaurant Name</h2>
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={18} /> Bhairahawa-13, Siddharthanagar, Lumbini
            </p>
          </div>
        </div>
        <div className="flex  justify-between  sm:gap-10 sm:justify-start">
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="flex items-center gap-1 justify-center w-fit p-1 font-semibold rounded-md bg-green-500 text-white text-xs ">
              4.7 <Star size={14} />
            </p>
            <p className="text-xs text-gray-500">417 ratings</p>
          </div>
          <div className="border border-gray-200"></div>
          <div className="flex items-center flex-col gap-1  ">
            <p className="font-semibold text-xs">Timing</p>
            <p className="text-xs text-gray-500">9:00AM - 10:00 PM</p>
          </div>
          <div className="border border-gray-200"></div>
          <div className="flex items-center flex-col gap-1  ">
            <p className="font-semibold text-xs">Mini Order</p>
            <p className="text-xs text-gray-500">NRS 100</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantHeader;
