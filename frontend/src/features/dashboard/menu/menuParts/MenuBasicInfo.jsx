const MenuBasicInfo = ({ menuItems, handleChange, categories }) => {
  return (
    <>
      {/* item name  */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">Item Name</label>
        <input
          type="text"
          name="name"
          value={menuItems.name}
          onChange={handleChange}
          placeholder="e.g. Pizza"
          className="border border-gray-400 rounded-md px-4 py-2 outline-none w-full"
        />
      </div>
      {/* description  */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">Description</label>
        <textarea
          type="text"
          name="description"
          value={menuItems.description}
          onChange={handleChange}
          placeholder="Explain your item"
          className="border border-gray-400 rounded-md px-4 py-2 outline-none "
        />
      </div>
      {/* category  */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-600">Category</label>
        <select
          name="category"
          value={menuItems.category}
          onChange={handleChange}
          className="border border-gray-400 py-2 rounded-md px-4 w-full text-gray-400"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      {/* status  */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-600">Status</label>
        <select
          name="status"
          value={menuItems.status}
          onChange={handleChange}
          className="border border-gray-400 py-2 rounded-md px-4 w-full text-gray-400"
        >
          <option value="available">Available</option>
          <option value="outofstock">Out of stock</option>
        </select>
      </div>
      {/* base price  */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-600">Base Price</label>
        <input
          type="number"
          name="basePrice"
          min="0"
          value={menuItems.basePrice}
          onChange={handleChange}
          placeholder="e.g. 250"
          className="border border-gray-400 outline-none rounded-md px-4 py-2"
        />
      </div>
    </>
  );
};

export default MenuBasicInfo;
