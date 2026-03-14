import { Blocks, EyeOff, Image, SquareCheckBig } from "lucide-react";

const StatsCard = () => {
  const stats = [
    {
      id: 1,
      title: "Total Categories",
      value: "13",
      icons: Blocks,
    },
    {
      id: 2,
      title: "Total Menus",
      value: "4",
      icons: Image,
    },
    {
      id: 3,
      title: "Active Menus",
      value: "12",
      icons: SquareCheckBig,
    },
    {
      id: 4,
      title: "Hidden Menus",
      value: "8",
      icons: EyeOff,
    },
  ];
  return (
    <>
      {/* stats card  */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icons;
          return (
            <div className="shadow-sm p-4 lg:p-6 flex items-center justify-between rounded-md">
              <div className="rounded-md   space-y-2">
                <p className="text-xs text-gray-500">{item.title}</p>
                <h1 className="font-bold text-2xl">{item.value}</h1>
              </div>
              {/* <Icon className="hidden lg:block h-8 w-8 text-gray-500" /> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StatsCard;
