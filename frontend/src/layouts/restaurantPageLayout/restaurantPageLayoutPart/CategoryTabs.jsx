

const CategoryTabs = ({categories, activeCategory}) => {
  return (
    <>
 <div className=" mt-3 bg-orange-100 py-2 px-4 overflow-x-auto scrollbar-hide ">
          <div className="max-w-7xl mx-auto ">
            <ul className="flex  gap-6 ">
              {categories.map((cat) => (
                <li
                  onClick={() => setActiveCategory(cat._id)}
                  className={` px-2 rounded-md text-lg  ${
                    activeCategory === cat._id
                      ? "text-white  bg-orange-500"
                      : "text-gray-500"
                  }`}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  )
}

export default CategoryTabs