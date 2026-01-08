// Images

// Icons

import { Link } from "react-router-dom";
import { SERVICES } from "../../data/data";

const Service = ({ data, isMore }) => {
  return (
    <section
      id="service"
      className={`${isMore ? "bg-white" : "bg-[#007aff36]"}  !py-16`}
    >
      <div className="w-[80%] !mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center !mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 !mb-3">
            {isMore ? "Other Services" : "Our Core Sectors"}
          </h2>
          {!isMore && (
            <p className="text-slate-500">
              Forming strong foundations across key industrial domains.
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative h-[450px] cursor-pointer group bg-slate-900 overflow-hidden"
            >
              <Link
                to={`/service/${item.slug}`}
                className="block w-full h-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-1.5 bg-[#1666ad] mb-4 transition-all duration-500 group-hover:w-full"></div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <span className="text-[#ffc400] text-sm font-semibold flex items-center gap-2">
                      EXPLORE MORE
                      <span className="group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
