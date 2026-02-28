import { Plus, Trash, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import imageCompression from "browser-image-compression";
import MenuBasicInfo from "./MenuBasicInfo";
import VariantGroup from "./VariantGroup";
import ImageUploader from "./ImageUploader";

const MenuModal = ({ setShowMenuModal }) => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const imageRef = useRef();

  const [menuItems, setMenuItems] = useState({
    name: "",
    description: "",
    category: "",
    basePrice: "",
    status: "available",
    variantGroups: [],
  });

  // variants function starts
  const addVariantGroup = () => {
    setMenuItems({
      ...menuItems,

      variantGroups: [
        ...menuItems.variantGroups,
        {
          groupName: "",
          required: false,
          multiSelect: false,
          options: [{ name: "", price: "" }],
        },
      ],
    });
  };
  const handleVariantGroupChange = (index, e) => {
    const updatedGroups = [...menuItems.variantGroups];
    updatedGroups[index][e.target.name] = e.target.value;
    setMenuItems({ ...menuItems, variantGroups: updatedGroups });
  };

  const toggleRequired = (index) => {
    const updatedGroups = [...menuItems.variantGroups];
    updatedGroups[index].required = !updatedGroups[index].required;

    setMenuItems({ ...menuItems, variantGroups: updatedGroups });
  };

  const toggleMultiSelect = (index) => {
    const updatedGroups = [...menuItems.variantGroups];
    updatedGroups[index].multiSelect = !updatedGroups[index].multiSelect;
    setMenuItems({ ...menuItems, variantGroups: updatedGroups });
  };
  const addVariantOption = (groupIndex) => {
    const updateGroups = [...menuItems.variantGroups];
    updateGroups[groupIndex].options.push({ name: "", price: "" });
    setMenuItems({ ...menuItems, variantGroups: updateGroups });
  };

  const handleOptionChange = (groupIndex, optionIndex, e) => {
    const updatedGroups = [...menuItems.variantGroups];

    updatedGroups[groupIndex].options[optionIndex][e.target.name] =
      e.target.value;
    setMenuItems({ ...menuItems, variantGroups: updatedGroups });
  };

  const removeVariantGroup = (index) => {
    const updatedGroups = menuItems.variantGroups.filter((_, i) => i !== index);

    setMenuItems({ ...menuItems, variantGroups: updatedGroups });
  };

  const removeOption = (groupIndex, optionIndex) => {
    const updatedGroups = [...menuItems.variantGroups];

    updatedGroups[groupIndex].options = updatedGroups[
      groupIndex
    ].options.filter((_, i) => i !== optionIndex);

    setMenuItems({ ...menuItems, variantGroups: updatedGroups });
  };
  // variants options ends

  // basic function

  const handleChange = (e) => {
    setMenuItems({ ...menuItems, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

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
      const compressFile = await imageCompression(file, options);
      toast.dismiss();
      setImageFile(compressFile);
      setImagePreview(URL.createObjectURL(compressFile));
      toast.success("Image compressed successfully");
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

  // validation and submit
  const validateForm = () => {
    // menu name
    if (!menuItems.name.trim()) {
      toast.error("Item name is required");
      return false;
    }
    // menu category
    if (!menuItems.category.trim()) {
      toast.error("Please select the category");
      return false;
    }
    // menu price

    if (!menuItems.basePrice || Number(menuItems.basePrice) <= 0) {
      toast.error("Please enter the valid price");
      return false;
    }

    // Variant validation
    if (menuItems.variantGroups.length > 0) {
      for (let i = 0; i < menuItems.variantGroups.length; i++) {
        const group = menuItems.variantGroups[i];

        if (!group.groupName.trim()) {
          toast.error(`Variant Group ${i + 1} name is required.`);
          return false;
        }

        if (!group.options || group.options.length === 0) {
          toast.error(`Variant Group ${i + 1} must have at least 1 option.`);
          return false;
        }

        for (let j = 0; j < group.options.length; j++) {
          const option = group.options[j];

          if (!option.name.trim()) {
            toast.error(
              `Option name is required in Group ${i + 1}, Option ${j + 1}`,
            );
            return false;
          }

          if (!option.price || Number(option.price) < 0) {
            toast.error(
              `Option price must be valid in Group ${i + 1}, Option ${j + 1}`,
            );
            return false;
          }
        }

        // If group required, at least 1 option should be valid
        if (group.required) {
          const validOptions = group.options.filter(
            (opt) => opt.name.trim() && opt.price !== "",
          );

          if (validOptions.length === 0) {
            toast.error(
              `Required group "${group.groupName}" must have at least 1 valid option.`,
            );
            return false;
          }
        }
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    const formData = new FormData();
    formData.append("name", menuItems.name);
    formData.append("description", menuItems.description);
    formData.append("category", menuItems.category);
    formData.append("basePrice", menuItems.basePrice);
    formData.append("image", imageFile);
    formData.append("status", menuItems.status);
    formData.append("variantGroups", JSON.stringify(menuItems.variantGroups));

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    toast.success("Menu added successfully");

    setMenuItems({
      name: "",
      description: "",
      category: "",
      basePrice: "",
      status: "available",
      variantGroups: [],
    });
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview(null);
    setImageFile(null);
    setShowMenuModal(false);
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 bg-black/40 p-4">
        <div className="bg-white shadow-sm rounded-md max-w-lg w-full p-8 ">
          <div className="flex justify-between mb-8">
            <h1 className="font-medium capitalize text-2xl">
              Add new Menu Item
            </h1>
            <button type="button" onClick={() => setShowMenuModal(false)}>
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex  flex-col gap-4">
            <div className="h-[60vh]  overflow-y-scroll flex flex-col gap-4  scrollbar-hide">
              <MenuBasicInfo
                menuItems={menuItems}
                handleChange={handleChange}
              />

              {/* vairant feature/button  */}
              <div className="flex justify-between items-center">
                <p>Variants</p>
                <button
                  type="button"
                  onClick={addVariantGroup}
                  className="flex items-center gap-2 font-medium text-orange-500"
                >
                  <Plus size={20} />
                  Add Variant Group
                </button>
              </div>

              {/* variant group  */}
              {menuItems.variantGroups.length > 0 &&
                menuItems.variantGroups.map((group, groupIndex) => (
                  <VariantGroup
                    key={groupIndex}
                    groupIndex={groupIndex}
                    group={group}
                    handleVariantGroupChange={handleVariantGroupChange}
                    toggleRequired={toggleRequired}
                    toggleMultiSelect={toggleMultiSelect}
                    addVariantOption={addVariantOption}
                    handleOptionChange={handleOptionChange}
                    removeOption={removeOption}
                    removeVariantGroup={removeVariantGroup}
                  />
                ))}

              {/* image  */}
              <ImageUploader
                imageRef={imageRef}
                imagePreview={imagePreview}
                handleImageChange={handleChange}
                removeImage={removeImage}
              />
            </div>

            <button className="bg-orange-500 text-white py-2 px-4 rounded-md font-medium text-lg">
              Save Menu Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
