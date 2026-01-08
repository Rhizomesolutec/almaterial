import React from "react";
import about from "../../assets/images/banner1.png";
import vector from "../../assets/images/vector.svg";

const AboutUs = () => {
  return (
    <div id="about" className="!pt-16 !relative overflow-hidden">
      <div className="container mx-auto md:px-20">
        <img src={vector} alt="Vector" className="absolute -right-20 top-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          {/* Text Content */}
          <div className="space-y-5 p-4 md:p-0">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !my-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-7 text-[16px] mt-4">
              Al Materyal FZ LLC is a leading supplier of premium materials for
              the construction, industrial, and marine sectors. With a strong
              commitment to quality and reliability, we deliver solutions
              engineered to support projects of every scale. Our multi-industry
              expertise helps us serve diverse client needs with precision,
              trust, and excellence.
            </p>
            <p className="text-gray-600 leading-7 text-[16px] mt-4">
              With strong multi-industry expertise, we support projects of every
              scale with precision and professionalism. Whether it’s large-scale
              construction, specialized industrial requirements, or marine-grade
              solutions, we provide clients with dependable service, timely
              delivery, and a commitment to excellence that builds lasting
              trust.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-blue-600/20 blur-xl"></div>
            <img
              src={about}
              alt="Construction Image"
              className="relative shadow-xl object-cover w-full h-[320px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
