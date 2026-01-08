import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { SERVICES } from "../../data/data";
import Footer from "../Footer/Footer";
import Service from "../Service/Service";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const service = SERVICES.find((s) => s.slug === slug);
    setSelectedService(service);
  }, [slug]);

  const OTHER_SERVICES = SERVICES.filter((service) => service.slug !== slug);

  return (
    <>
      <section className="!py-10 !pt-[100px] container !mx-auto min-h-screen ">
        <Header isBlack />
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto mb-16 border-b-2 border-gray-900 pb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900">
                {selectedService?.title}
              </h2>
            </div>
            <p className="text-gray-500 mt-4 md:mt-0 text-sm md:text-base italic">
              {selectedService?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto">
            {selectedService?.children.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } border border-gray-200 group transition-colors duration-300 hover:border-[#1666ad]`}
              >
                <div className="w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden relative">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 bg-gray-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">
                    0{index + 1}
                  </div>
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gray-50 group-hover:bg-white transition-colors duration-300">
                  <div className="relative mb-8">
                    <h4 className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-gray-900 relative z-10">
                      {item?.title}
                    </h4>
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1666ad] group-hover:w-full transition-all duration-500"></div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {item?.items.map((listItem, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-2 h-2 bg-gray-300 group-hover/item:bg-[#1666ad] group-hover/item:rotate-45 transition-all duration-300"></div>
                        <span className="text-sm md:text-base font-semibold text-gray-600 group-hover/item:text-black">
                          {listItem.title}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="mt-10">
                    <button className="border-2 border-gray-900 px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all">
                      View Specifications
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Service isMore data={OTHER_SERVICES} />
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
