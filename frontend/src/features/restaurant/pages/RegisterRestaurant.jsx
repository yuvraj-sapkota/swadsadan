// src/features/restaurant/pages/RegisterRestaurant.jsx
import React, { useState, useRef } from "react";
import Navbar from "../../../components/navbar/Navbar";
import { User, MapPin, Phone, Info, ImageIcon, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { registerRestaurant } from "../../../services/restaurant/restaurantApi";
import imageCompression from "browser-image-compression";

const RegisterRestaurant = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const imageRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Only image files are allowed");
      return;
    }

    try {
      toast.loading("Compressing image...");
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      toast.dismiss();
      setImageFile(compressedFile);
      setImagePreview(URL.createObjectURL(compressedFile));
      toast.success("Image ready for upload!");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to compress image");
      console.log(error);
    }
  };

  const removeImage = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(null);
    setImagePreview(null);
    imageRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.contact) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!imageFile) {
      toast.error("Please select an image for your restaurant");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("name", formData.name);
      data.append("address", formData.address);
      data.append("contact", formData.contact);
      data.append("description", formData.description);
      data.append("image", imageFile);

      const res = await registerRestaurant(data);
      if (res.success) {
        toast.success("Restaurant registered successfully!");
        navigate("/dashboard"); // redirect to restaurant dashboard/page
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex min-h-[90vh] py-10">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-xl mx-auto px-4">
            <div className="bg-white py-8 px-4 rounded-md border border-gray-200 shadow">
              {/* header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight mb-1">
                  Register Your Restaurant
                </h2>
                <p className="text-sm text-gray-400">
                  Get your restaurant online
                </p>
              </div>

              {/* form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Restaurant Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600 font-medium">
                    Restaurant Name
                  </label>
                  <div className="relative">
                    <User
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Golden Fork"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600 font-medium">Address</label>
                  <div className="relative">
                    <MapPin
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      type="text"
                      placeholder="123 Main Street"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                      required
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600 font-medium">Contact</label>
                  <div className="relative">
                    <Phone
                      size={15}
                      className="text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3"
                    />
                    <input
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      type="text"
                      placeholder="9876543210"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600 font-medium">
                    Description
                  </label>
                  <div className="relative">
                    <Info
                      size={15}
                      className="text-gray-400 absolute top-3 left-3"
                    />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Brief description of your restaurant"
                      className="border border-gray-200 rounded-md py-3 px-9 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600 font-medium">
                    Restaurant Image
                  </label>
                  <input
                    ref={imageRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border border-gray-200 rounded-md py-2 px-3 w-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-amber-500 transition"
                  />
                  {imagePreview && (
                    <div className="mt-2 relative w-40 h-40">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-1 right-1 bg-white rounded-full p-1 shadow"
                      >
                        X
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`${
                    loading ? "bg-orange-400" : "bg-orange-500"
                  }  hover:bg-orange-600 font-semibold rounded-md transition-colors mt-2 text-white w-full py-3 flex items-center justify-center `}
                >
                  {loading && <Loader className="animate-spin h-5 w-5 mr-2" />}
                  {loading ? "Registering..." : "Register Restaurant"}
                </button>
              </form>

              {/* bottom text */}
              <div className="mt-5 text-center">
                <p className="text-gray-500">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-orange-500 font-medium ml-1"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterRestaurant;
