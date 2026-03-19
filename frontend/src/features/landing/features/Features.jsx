import { LayoutDashboard, QrCode, UtensilsCrossed, Wallet } from "lucide-react";

const Features = () => {
  const featureDetails = [
    {
      icon: QrCode,
      title: "QR Menu",
      desc: "Customers scan, order & pay from their phones — zero contact.",
    },
    {
      icon: LayoutDashboard,
      title: "Live Dashboard",
      desc: "Real-time order management for your kitchen and staff.",
    },
    {
      icon: Wallet,
      title: "Easy Payments",
      desc: "eSewa, Khalti, ConnectIPS, and cash — all in one place.",
    },
    {
      icon: UtensilsCrossed,
      title: "Menu Control",
      desc: "Update items, prices, and availability in seconds.",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pb-14">
        <div>
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold">Everything you need</h1>
            <p className="text-gray-400 ">One platform, all the tools</p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {featureDetails.map((features) => {
              const Icon = features.icon;
              return (
                <div
                  key={features.title}
                  className="bg-gray-100 p-5 rounded-md flex items-start flex-col gap-2 border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all group"
                >
                  <div className="bg-white w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center group-hover:border-orange-200 group-hover:bg-orange-50">
                    <Icon className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold">{features.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {features.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
