"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import PromoCard from "./promo-card";
import { Scrollbar } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

const data = [
  {
    id: 0,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate expedita corporis dolorum voluptates earum hic! In et dolorem quas! Suscipit, atque asperiores adipisci optio vel maiores nobis perferendis est?",
  },
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate expedita corporis dolorum voluptates earum hic! In et dolorem quas! Suscipit, atque asperiores adipisci optio vel maiores nobis perferendis est?",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate expedita corporis dolorum voluptates earum hic! In et dolorem quas! Suscipit, atque asperiores adipisci optio vel maiores nobis perferendis est?",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate expedita corporis dolorum voluptates earum hic! In et dolorem quas! Suscipit, atque asperiores adipisci optio vel maiores nobis perferendis est?",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate expedita corporis dolorum voluptates earum hic! In et dolorem quas! Suscipit, atque asperiores adipisci optio vel maiores nobis perferendis est?",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate expedita corporis dolorum voluptates earum hic! In et dolorem quas! Suscipit, atque asperiores adipisci optio vel maiores nobis perferendis est?",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate expedita corporis dolorum voluptates earum hic! In et dolorem quas! Suscipit, atque asperiores adipisci optio vel maiores nobis perferendis est?",
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate expedita corporis dolorum voluptates earum hic! In et dolorem quas! Suscipit, atque asperiores adipisci optio vel maiores nobis perferendis est?",
  },
];

const PromoList = () => {
  return (
    <Swiper
      className="pb-[20px]"
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
    >
      {data.map((it) => (
        <SwiperSlide key={it.id}>
          <PromoCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromoList;
