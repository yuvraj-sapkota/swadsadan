import { SettingsIcon, User } from "lucide-react";
import { useState } from "react";
import TabSwitcher from "./settingComponents/TabSwitcher";
import ProfileTab from "./settingComponents/ProfileTab";
import AccountTab from "./settingComponents/AccountTab";


const Settings = () => {
 
  const [activeTab, setActiveTab] = useState("profile");
  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];
  return (
    <>
      <div className="space-y-5">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Settings</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Manage your restaurant profile and account preferences
          </p>
        </div>

        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "profile" ? <ProfileTab /> : <AccountTab />}
      </div>
    </>
  );
};

export default Settings;
