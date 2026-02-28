import React from "react";

const ImageUploader = ({
  imageRef,
  imagePreview,
  handleImageChange,
  removeImage,
}) => {
  return (
    <>
      {/* image  */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-600">Image</label>
        <input
          ref={imageRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          placeholder="e.g. 250"
          className="border border-gray-400 outline-none rounded-md px-4 py-2"
        />

        {imagePreview && (
          <div className="mt-1 flex justify-between items-center gap-4 border-2  border-dashed border-gray-400  rounded-md p-3">
            <div className="flex items-center gap-4 ">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-md"
              />
              <p className="text-sm text-gray-600">Selected image preview</p>
            </div>
            <button
              type="button"
              onClick={removeImage}
              className="p-2 rounded-md bg-red-100 hover:bg-red-200 transition"
            >
              <Trash size={28} className="text-red-600" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
