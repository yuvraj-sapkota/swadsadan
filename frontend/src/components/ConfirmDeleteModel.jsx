import { Loader, X } from "lucide-react";

const ConfirmDeleteModal = ({
  title = "Delete Item",
  message = "Are you sure you want to delete this item?",
  onConfirm,
  onCancel,
  loading
}) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      
      <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg">

        {/* header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <X
            size={20}
            className="cursor-pointer"
            onClick={onCancel}
          />
        </div>

        {/* message */}
        <p className="text-gray-600 text-sm mb-6">
          {message}
        </p>

        {/* actions */}
        <div className="flex justify-end gap-3">
          
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center justify-center"
          >
            {loading && <Loader className="animate-spin h-5 w-5 mr-2" />}
            {loading ? "Deleting..." : "Delete"}
          </button>

           {/* <button
              disabled={loading}
              className={`${
                loading ? "bg-orange-400" : "bg-orange-500"
              } text-white py-3 px-4 rounded-md font-medium text-lg flex items-center justify-center`}
            >
              {loading && <Loader className="animate-spin h-5 w-5 mr-2" />}
              {loading ? "Saving..." : "Save Category"}
            </button> */}

        </div>

      </div>
    </div>
  );
};

export default ConfirmDeleteModal;