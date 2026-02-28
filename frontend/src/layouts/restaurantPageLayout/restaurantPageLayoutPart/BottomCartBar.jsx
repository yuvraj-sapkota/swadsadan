import { ChevronRight } from "lucide-react";

const BottomCartBar = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full shadow-teal-500 rounded-t-2xl py-4   px-4 bg-gray-100">
        <div className="bg-green-500 flex justify-between py-4 px-2 rounded-md">
          <p className="text-white font-bold  ">1 item added</p>
          <button className="flex items-center gap-1 text-white font-bold   ">
            View Cart <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomCartBar;
