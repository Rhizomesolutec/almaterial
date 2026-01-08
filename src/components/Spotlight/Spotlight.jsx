import React from "react";
import "./Spotlight.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import FloatingContactButtons from "../FloatingContactButtons/FloatingContactButtons";

const Spotlight = () => {
  const slides = [
    {
      title: (
        <>
          High-Quality <br /> <span>Construction</span> Materials
        </>
      ),
      description:
        "Al Materyal FZ LLC provides top-tier construction resources trusted across Dubai and the UAE, ensuring excellence and reliability for every project.",
    },
    {
      title: (
        <>
          Reliable <br /> <span>Marine</span> Equipment
        </>
      ),
      description:
        "Premium marine-grade hardware and maintenance materials built for durability and safety.",
    },
    {
      title: (
        <>
          Industrial <br /> <span>Tools &amp; Supplies</span>
        </>
      ),
      description:
        "Trusted industrial solutions ensuring performance for workshops, factories, and projects.",
    },
  ];

  return (
    <section className="spotlight">
      <video
        src="/videos/bg.mp4"
        muted
        autoPlay
        loop
        className="w-full h-screen absolute top-0 left-0 object-cover z-0"
      ></video>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500 }}
        loop
        className="spotlight-swiper !pb-10"
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="spotlight-content">
              <h2>{slide.title}</h2>

              <p>{slide.description}</p>

              <button className="spotlight-btn">Explore Products</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <FloatingContactButtons />
    </section>
  );
};

export default Spotlight;
