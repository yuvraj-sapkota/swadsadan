import { ChevronDown, ChevronRight, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-8">
          {/* cart header  */}
          <div>
            <h1 className="text-xl font-medium">Your cart items</h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 mx-2">
              <span className="text-gray-500 font-bold">Note: </span>Please note
              that you can only check out from one restaurant at a time. Kindly
              complete your order from one restaurant before proceeding to
              checkout
            </p>
          </div>
          <div className="border border-gray-200 shadow-sm rounded-md">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-start justify-between gap-4 px-2 py-4"
            >
              <div className="flex  items-start gap-4">
                <div className="hidden md:block h-15 w-15 rounded-md overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.squarespace-cdn.com/content/v1/56bbba188a65e26b26e030bc/1694643885363-KHU5L14DE3PCJ190JDDQ/Baxter_Imaging_Dining_Nobu_Scottsdale_01.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-gray-500 ">1 items</p>
                  <h2 className="font-semibold">Restaurant Name</h2>
                </div>
              </div>

              <button className={`transition duration-200 ease-in-out ${isOpen ? "rotate-0" : "rotate-180"}`}>
                
                <ChevronDown />
              </button>
            </div>
            {isOpen && (
              <>
                <div className="space-y-2 ">
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
                        <p className="text-gray-400 text-sm md:text-base">
                          NRS 45
                        </p>
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
                </div>
                <div className="flex justify-between px-2 py-6 items-center">
                  <div>
                    <p>
                      <span className="font-medium">Total:</span> NRS 150
                    </p>
                  </div>
                  <div>
                    <button className="bg-green-500 text-white py-4 px-4 rounded-md font-bold flex items-center gap-1 justify-center text-sm">
                     Cheeckout <ChevronRight size={18} />{" "}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
