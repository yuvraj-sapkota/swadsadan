import { FileInput, Trash, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const CategoryModal = ({ setShowCategoryModal }) => {
  const [categoryDetails, setCategoryDetails] = useState({
    name: "",
    description: "",
    status: "active",
    priority: "1",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const imageInput = useRef(null);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCategoryDetails({ ...categoryDetails, [e.target.name]: e.target.value });

    if (e.target.name === "name") {
      setErrors({ ...errors, name: "" });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!categoryDetails.name.trim()) {
      newErrors.name = "Category name is required";
    }

    setErrors(newErrors);

    // if no erros
    return Object.keys(newErrors).length === 0;
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);

    // if (FileInput.current) {
    //   imageInput.current.value = "";
    // }
    imageInput.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const formData = new FormData();
    formData.append("name", categoryDetails.name);
    formData.append("description", categoryDetails.description);
    formData.append("status", categoryDetails.status || "active");
    formData.append("priority", categoryDetails.priority);
    formData.append("image", imageFile);

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    // api call yaha huncha

    toast.success("Category added successfully");

    // reset form after submit
    setCategoryDetails({
      name: "",
      description: "",
      status: "",
      priority: "1",
    });
    setImageFile(null);
    setImagePreview(null);

    setShowCategoryModal(false);
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 bg-black/40 p-4">
        <div className="bg-white shadow-sm rounded-md max-w-lg w-full p-8 ">
          <div className="flex justify-between mb-8">
            <h1 className="font-medium capitalize text-2xl">
              Add new category
            </h1>
            <X size={20} onClick={() => setShowCategoryModal(false)} />
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* category name  */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Category Name</label>
              <input
                type="text"
                name="name"
                value={categoryDetails.name}
                onChange={handleChange}
                placeholder="e.g. Pizza"
                className={`border  rounded-md px-4 py-2 outline-none  ${
                  errors.name ? "border-red-500" : "border-gray-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm -mt-2">{errors.name}</p>
              )}
            </div>
            {/* category description  */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Category Description
              </label>
              <input
                type="text"
                name="description"
                value={categoryDetails.description}
                onChange={handleChange}
                placeholder="write short description"
                className="border border-gray-400 rounded-md px-4 py-2 outline-none "
              />
            </div>

            {/* image  */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-600">Image</label>
              <input
                type="file"
                ref={imageInput}
                accept="image/*"
                onChange={handleImageChange}
                className="border border-gray-400 outline-none rounded-md px-4 py-2"
              />

              {imagePreview && (
                <div className="mt-3 flex justify-between items-center gap-4  border rounded-md p-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <p className="text-sm text-gray-600">
                      Selected image preview
                    </p>
                  </div>
                  <button
                    onClick={removeImage}
                    className="p-2 rounded-md bg-red-100 hover:bg-red-200 transition"
                  >
                    <Trash size={28} className="text-red-600" />
                  </button>
                </div>
              )}
            </div>
            {/* status  */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-600">Status</label>
              <select
                name="status"
                value={categoryDetails.status}
                onChange={handleChange}
                className="border border-gray-400 py-2 rounded-md px-4 w-full text-gray-400"
              >
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="hidden">Hidden</option>
              </select>
            </div>
            {/* priority */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-600">
                Category Priority
              </label>
              <input
                type="text"
                name="priority"
                value={categoryDetails.priority}
                onChange={handleChange}
                placeholder="e.g. 1"
                className="border border-gray-400 outline-none rounded-md px-4 py-2"
              />
            </div>
            {/* save btn  */}
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md font-medium text-lg">
              Save Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
