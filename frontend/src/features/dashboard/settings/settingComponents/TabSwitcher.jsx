import { SettingsIcon, User } from "lucide-react";


const TabSwitcher = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];
  return (
    <>
      <div className="flex bg-gray-100 w-fit p-1 rounded-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-md text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-white text-orange-500 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <tab.icon size={15} />
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default TabSwitcher;
