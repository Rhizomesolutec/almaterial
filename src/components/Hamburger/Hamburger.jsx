import React, { useState } from "react";
import { IoCloseOutline, IoMenu } from "react-icons/io5";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      {/* Hamburger Icon */}
      <div
        className="menu cursor-pointer !px-6 text-white"
        onClick={() => setIsActive(true)}
      >
        <IoMenu className="w-8 h-8" />
      </div>

      {/* Mobile Menu */}
      {isActive && (
        <div className="w-full h-screen bg-white fixed top-0 left-0 !pt-10 pr-6 z-50 !px-10">
          {/* Close Icon */}
          <div className="flex justify-end" onClick={() => setIsActive(false)}>
            <IoCloseOutline className="w-10 h-10 cursor-pointer" />
          </div>

          {/* Menu Items */}
          <div className="pt-20 pl-20">
            <ul className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-xl font-bold text-[#2c5234] hover:text-[#4CAF50] transition-colors"
                    onClick={() => setIsActive(false)} // Close menu on click
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
