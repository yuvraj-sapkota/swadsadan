import { BadgePercent, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const offers = [
  { title: "💯 60% OFF up to NRS 200 " },
  { title: "🏷️ Flat NPR 125 OFF" },
  { title: "💯 60% OFF up to NRS 200" },
  { title: "🔥 20% Discount" },
];

export default function OfferSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex items-center justify-center  gap-5 ">
      <Swiper
        className=" w-full h-12 "
        modules={[Autoplay]}
        direction="vertical"
        spaceBetween={1}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop={true}
        speed={1200}
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className=" h-full items-center justify-start md:justify-center flex ">
              <p className="line-clamp-1 text-sm">{offer.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Side */}
      <div className="flex items-center justify-center  w-30 md:hidden ">
        <button className="text-sm flex items-center gap-1  text-gray-500  ">
          All offers <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}
