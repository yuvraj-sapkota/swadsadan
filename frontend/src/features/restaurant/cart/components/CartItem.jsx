import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = () => {
  return (
    <>
      <div className=" flex gap-4  justify-between items-start bg-gray-100 p-4 ">
        <div className="flex gap-3 ">
          <div className="h-16 w-16 rounded-md overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://www.australianeggs.org.au/assets/recipes/Egg-trout-croissant-0192-prv__ScaleWidthWzEyMDBd.jpg"
              alt=""
            />
          </div>
          <div className="">
            <h2 className="font-medium"> Kaju katli</h2>
            <p className="text-gray-400 text-sm md:text-base">NRS 45</p>
          </div>
        </div>
        <div className="flex  flex-col items-center gap-4">
          <div className="flex items-center gap-2.5 text-white bg-orange-500  py-1 rounded-md px-2">
            <button className=" rounded ">
              <Minus size={14} />
            </button>
            <span className="font-semibold">1</span>
            <button className=" rounded ">
              <Plus size={14} />
            </button>
          </div>
          <button className="">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
