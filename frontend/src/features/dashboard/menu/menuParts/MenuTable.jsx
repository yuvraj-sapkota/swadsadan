import { Pencil, Trash2 } from "lucide-react";
import React from "react";

const MenuTable = ({ menus, onDelete, onEdit }) => {
  return (
    <>
      <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm">
        <table className="w-full border min-w-[900px] border-collapse">
          <thead className="bg-gray-100 text-gray-500 text-sm">
            <tr>
              <th className="text-left px-4 py-2 whitespace-nowrap">
                Menu Item
              </th>
              <th className="text-left px-4 py-2 whitespace-nowrap">Name</th>
              <th className="text-left px-4 py-2 whitespace-nowrap">
                Descripton
              </th>
              {/* <th className="text-left px-4 py-2 whitespace-nowrap">
                Category
              </th> */}
              <th className="text-left px-4 py-2 whitespace-nowrap">Status</th>
              <th className="text-right px-4 py-2 whitespace-nowrap">Price</th>
              <th className="text-right px-4 py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {menus.map((menu) => (
              <tr key={menu._id} className="border-b border-gray-200">
                <td className="px-4 py-2 flex items-center gap-3">
                  <img
                    src={menu.imageUrl}
                    alt={menu.name}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-2 text-gray-500">{menu.name}</td>
                <td className="px-4 py-2 text-gray-500">{menu.description}</td>
                {/* <td className="px-4 py-2 text-gray-500">{menu.category.name}</td> */}
                <td className="px-4 py-2 text-gray-500">{menu.status}</td>
                <td className="px-4 py-2 text-gray-500 text-right">
                  {menu.basePrice}
                </td>

                <td className="px-4 py-2 text-gray-500">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(menu)}
                      className="p-2 rounded-md border border-gray-200 hover:bg-gray-100"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(menu._id, "menu")}
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

export default MenuTable;
