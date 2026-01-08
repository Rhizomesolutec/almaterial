import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import useInView from "../../hooks/useInview";

const Stats = () => {
  const [ref, inView] = useInView();
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "1500+", label: "Projects Completed" },
    { value: "4.8/5", label: "Customer Satisfaction Score" },
    { value: "98%", label: "Project Success Rate" },
  ];

  const getNumberAndSymbol = (value) => {
    const number = parseFloat(value);
    const symbol = value.replace(number, "");
    return { number, symbol };
  };

  return (
    <section className="!py-20">
      <div className="max-w-6xl !mx-auto px-4">
        {/* top thin line like in the design */}
        <div className=" pt-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => {
            const { number, symbol } = getNumberAndSymbol(item.value);
            return (
              <div key={i} ref={ref} className="space-y-1">
                <div className="text-3xl md:text-5xl font-semibold text-[#de9017]">
                  <CountUp
                    end={number}
                    suffix={symbol}
                    duration={1.8}
                    start={inView ? 0 : null}
                    decimals={number % 1 !== 0 ? 1 : 0}
                  />
                </div>

                <div className="text-sm md:text-base text-slate-500">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
