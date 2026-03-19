import { Pencil, Trash2 } from "lucide-react";
import React from "react";

const CategoryTable = ({ categories, onDelete, onEdit }) => {
  return (
    <>
      <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm">
        <table className="w-full border min-w-[900px] border-collapse">
          <thead className="bg-gray-100 text-gray-500 text-sm">
            <tr>
              <th className="text-left px-4 py-2 whitespace-nowrap">Item</th>
              <th className="text-left px-4 py-2 whitespace-nowrap">Name</th>
              <th className="text-left px-4 py-2 whitespace-nowrap">
                Descripton
              </th>
              <th className="text-left px-4 py-2 whitespace-nowrap">
                Priority
              </th>
              <th className="text-left px-4 py-2 whitespace-nowrap">Status</th>
              <th className="text-right px-4 py-2 whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {categories.map((category) => (
              <tr key={category._id} className="border-b border-gray-200">
                <td className="px-4 py-2 ">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-2 text-gray-500">{category.name}</td>
                <td className="px-4 py-2 text-gray-500">
                  {category.description}
                </td>
                <td className="px-4 py-2 text-gray-500">{category.priority}</td>
                <td className="px-4 py-2 text-gray-500">{category.status}</td>
                <td className="px-4 py-2 text-gray-500">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(category)}
                      className="p-2 rounded-md border border-gray-200 hover:bg-gray-100"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(category._id, "category")}
                      className="p-2 rounded-md border border-gray-200 hover:bg-red-50"
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryTable;
