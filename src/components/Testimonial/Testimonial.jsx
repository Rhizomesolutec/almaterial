import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Aisha Khan",
    role: "Product Designer",
    quote:
      "Working with Hanan was a pleasure — the UI felt polished, performance was great, and delivery was on time. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1545996124-1a1c9b0b6f9b?auto=format&fit=crop&w=256&q=60",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Founder, iinve",
    quote:
      "Delivered exactly what we needed — a lightweight, elegant component matching our brand.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=60",
    rating: 4,
  },
  {
    id: 3,
    name: "Sneha Pillai",
    role: "Head of Marketing",
    quote:
      "The testimonial section looks amazing on our landing page. Clean design with delightful animations.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=60",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Pillai",
    role: "Head of Marketing",
    quote:
      "The testimonial section looks amazing on our landing page. Clean design with delightful animations.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=60",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-slate-50 pt-20">
      <div className="mx-auto px-0">
        <div className="text-center !mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            What our clients say
          </h2>
          <p className="text-slate-500 mt-2">
            Real feedback from our best projects
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          speed={5000}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          freeMode
          allowTouchMove={false}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10 !px-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="bg-white min-h-[250px] !p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">
                      {item.name}
                    </div>
                    <div className="text-sm text-slate-500">{item.role}</div>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed flex-1">
                  “{item.quote}”
                </p>

                <div className="flex items-center gap-2 mt-auto">
                  <StarRating value={item.rating} />
                  <div className="text-xs text-slate-400">{item.rating}/5</div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function StarRating({ value = 5 }) {
  const stars = new Array(5).fill(0);
  return (
    <div className="flex items-center">
      {stars.map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < Math.round(value) ? "text-yellow-400" : "text-slate-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.95c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.488 2.665c-.784.57-1.838-.196-1.539-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.526 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
        </svg>
      ))}
    </div>
  );
}
