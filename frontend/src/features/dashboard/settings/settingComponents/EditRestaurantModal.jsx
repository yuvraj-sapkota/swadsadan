import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRestaurantStore } from "../../../../store/restaurant/restaurantStore";

const EditRestaurantModal = ({ isOpen, onClose, restaurant }) => {
  const { updateRestaurant } = useRestaurantStore();

  const [formData, setFormData] = useState({
    name: "",
    ownerName: "",
    email: "",
    contact: "",
    address: "",
    description: "",
    image: "",
    openTime: "",
    closeTime: "",
  });

  useEffect(() => {
    if (restaurant) {
      setFormData({
        name: restaurant.name || "",
        ownerName: restaurant.owner?.name || "",
        email: restaurant.owner?.email || "",
        contact: restaurant.contact || "",
        address: restaurant.address || "",
        description: restaurant.description || "",
        image: restaurant.image || "",
        openTime: restaurant.openTime || "",
        closeTime: restaurant.closeTime || "",
      });
    }
  }, [restaurant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleSave = () => {
    // updateRestaurant({
    //   name: formData.name,
    //   contact: formData.contact,
    //   address: formData.address,
    //   description: formData.description,
    //   image: formData.image,
    //   openTime: formData.openTime,
    //   closeTime: formData.closeTime,
    //   owner: {
    //     name: formData.ownerName,
    //     email: formData.email,
    //   },
    // });

    onClose();
  
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-lg">Edit Restaurant</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Restaurant Name"
          />
          <Input
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Owner Name"
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <Input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Phone"
          />
          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />

          <input
            type="time"
            name="openTime"
            value={formData.openTime}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="time"
            name="closeTime"
            value={formData.closeTime}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mt-4 border p-2 rounded"
        />

        {/* Image */}
        <input type="file" onChange={handleImageChange} className="mt-3" />

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-5">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-orange-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Input = ({ name, value, onChange, placeholder }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border p-2 rounded w-full"
  />
);

export default EditRestaurantModal;
