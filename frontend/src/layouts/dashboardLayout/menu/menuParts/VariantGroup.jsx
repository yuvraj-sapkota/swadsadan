import { Plus, Trash } from "lucide-react";
import React from "react";

const VariantGroup = ({
  groupIndex,
  group,
  handleVariantGroupChange,
  toggleRequired,
  toggleMultiSelect,
  addVariantOption,
  handleOptionChange,
  removeOption,
  removeVariantGroup,
}) => {
  return (
    <>
      <div
        key={groupIndex}
        className="border border-gray-400 p-4 rounded-md flex  flex-col gap-3"
      >
        <div className="flex items-center justify-between py-1">
          <p>Variant Group {groupIndex + 1}</p>
          <button
            type="button"
            onClick={() => removeVariantGroup(groupIndex)}
            className="bg-red-100 text-red-400 hover:text-red-600 p-2 rounded-md"
          >
            <Trash size={20} />
          </button>
        </div>

        <input
          type="text"
          name="groupName"
          value={group.groupName}
          onChange={(e) => handleVariantGroupChange(groupIndex, e)}
          placeholder="Group Name (e.g. Size)"
          className="px-4 py-2 rounded-md border  border-gray-400 w-full
                "
        />

        <div className="flex flex-col gap-2 -mt-1">
          <label className="flex gap-2 items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={group.required}
              onChange={() => toggleRequired(groupIndex)}
            />
            Required (customer must select one)
          </label>

          <label className="flex gap-2 items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={group.multiSelect}
              onChange={() => toggleMultiSelect(groupIndex)}
            />
            Allow multiple selection
          </label>
        </div>

        {/* options   */}
        {group.options.map((option, optionIndex) => (
          <div
            key={optionIndex}
            className="border border-gray-200 flex flex-col sm:flex-row gap-2 p-3 rounded-md"
          >
            <input
              type="text"
              name="name"
              value={option.name}
              onChange={(e) => handleOptionChange(groupIndex, optionIndex, e)}
              placeholder="Option name (e.g. Small)"
              className="border border-gray-400 px-4 py-2 rounded-md outline-none"
            />
            <input
              type="number"
              name="price"
              min="0"
              value={option.price}
              onChange={(e) => handleOptionChange(groupIndex, optionIndex, e)}
              placeholder="Extra Price"
              className="border border-gray-400 px-4 py-2 rounded-md sm:w-32 outline-none"
            />
            <button
              type="button"
              onClick={() => removeOption(groupIndex, optionIndex)}
              className="bg-red-100 text-red-400 hover:text-red-600 p-2 rounded-md w-fit"
            >
              <Trash size={20} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => addVariantOption(groupIndex)}
          className="text-orange-500 flex items-center gap-1 text-sm font-medium"
        >
          <Plus size={20} />
          Add Option
        </button>
      </div>
    </>
  );
};

export default VariantGroup;
