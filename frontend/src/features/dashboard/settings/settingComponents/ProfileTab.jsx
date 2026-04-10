import { Camera, Clock, Edit2, Save, Star, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useRestaurantStore } from "../../../../store/restaurant/restaurantStore";
import Field from "./Field";

const ProfileTab = () => {
  const { restaurant, updateRestaurant } = useRestaurantStore();

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    ownerName: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    description: "",
    openingTime: "",
    closingTime: "",
  });

  useEffect(() => {
    if (restaurant) {
      setFormData({
        name: restaurant.name || "",
        ownerName: restaurant.owner?.name || "",
        phone: restaurant.contact || "",
        email: restaurant.owner?.email || "",
        website: restaurant.website || "",
        address: restaurant.address || "",
        description: restaurant.description || "",
        openingTime: restaurant.openingTime || "",
        closingTime: restaurant.closeTime || "",
      });
    }
  }, [restaurant]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    setEditing(false);

    // reset form
    if (restaurant) {
      setFormData({
        name: restaurant.name || "",
        ownerName: restaurant.owner?.name || "",
        phone: restaurant.contact || "",
        email: restaurant.owner?.email || "",
        website: restaurant.website || "",
        address: restaurant.address || "",
        description: restaurant.description || "",
        openingTime: restaurant.openingTime || "",
        closingTime: restaurant.closeTime || "",
      });
    }
  };

  // ✅ save (API later)
  const handleSave = async () => {
    try {
      const res = await updateRestaurant(restaurant._id, formData);
      console.log(res);
      setEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fields = [
    { label: "RESTAURANT NAME", key: "name" },
    { label: "Owner Name", key: "ownerName" },
    { label: "Phone", key: "phone" },
    { label: "Email", key: "email" },
    { label: "Website", key: "website" },
    { label: "Address", key: "address" },
  ];
  return (
    <>
      {/*Cover + Avatar */}
      <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
        <div className="relative h-32 bg-gradient-to-r from-orange-400 to-orange-600">
          <button className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 flex items-center gap-1.5 hover:bg-white transition">
            <Camera size={13} /> Change Cover
          </button>
        </div>

        <div className="px-6 pb-4 ">
          <div className="flex items-end justify-between -mt-10 mb-4">
            <div className="relative">
              <div className="w-20 h-20 overflow-hidden rounded-xl border-4 border-white bg-orange-100  shadow-md ">
                <img
                  src={restaurant.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <button className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1.5 text-white hover:bg-orange-600 transition">
                <Camera size={11} />
              </button>
            </div>

            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="flex items-center gap-2 border border-gray-200 hover:border-orange-300 hover:text-orange-500 text-gray-600 text-sm font-medium px-4 py-2 rounded-lg transition"
              >
                <Edit2 size={14} /> Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-1.5 border border-gray-200 text-gray-600 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                  <X size={14} /> Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                >
                  <Save size={14} /> Save
                </button>
              </div>
            )}
          </div>

          <h1 className="text-xl font-bold text-gray-800 ">
            {restaurant?.name}
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Owner: {restaurant?.owner.name}
          </p>

          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-1 bg-green-50 border border-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-700">
              <Star size={13} fill="currentColor" /> 4.3
            </div>
            <span className="text-xs text-gray-400">128 reviews</span>
            <div className="flex items-center gap-1 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full text-xs font-medium text-orange-600">
              Cuisine
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info  */}
      <div className="shadow-sm border border-gray-100 rounded-md p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-5 uppercase tracking-wide">
          Restaurant Info
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map((item) => (
            <Field
              key={item.key}
              label={item.label}
              value={formData[item.key]}
              editing={editing}
              type="text"
              onChange={(val) => handleChange(item.key, val)}
            />
          ))}
        </div>

        <div className="mt-4">
          <Field
            label="About restaurant"
            value={formData.description}
            editing={editing}
            type="textarea"
            onChange={(val) => handleChange("description", val)}
          />
        </div>
      </div>

      <div className="bg-white border border-gray-100 shadow-sm rounded-md p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-5 uppercase tracking-wide flex items-center gap-2">
          <Clock size={15} className="text-orange-500" /> Operating Hours
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Field
              label="Opens AT"
              value={formData.openingTime}
              editing={editing}
              type="time"
              onChange={(val) => handleChange("openingTime", val)}
            />
          </div>
          <div>
            <Field
              label="Closes AT"
              value={formData.closingTime}
              editing={editing}
              type="time"
              onChange={(val) => handleChange("closingTime", val)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
