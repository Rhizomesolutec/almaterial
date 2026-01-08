import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import Hamburger from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";

const Header = ({ isBlack = false }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 1000;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrolled]);

  return (
    <header
      className={
        "md:w-6xl w-full bg-transparent absolute top-0 right-[50%] z-50 px-4 sm:px-8 py-4 transition-all duration-300 transform translate-x-1/2 "
      }
    >
      <div className="w-full max-w-[1200px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className={isMobile ? "w-[70px] !pl-4" : "w-[60px]"}>
              <img src={Logo} alt="logo" className="w-full block" />
            </div>
          </Link>
          {/* Desktop Navigation */}
        </div>
        <div className="flex items-center">
          {!isMobile && (
            <nav className="navbar mr-20">
              <ul className="flex gap-8 list-none">
                {[
                  { name: "Home", link: "/#home" },
                  { name: "About Us", link: "/#about" },
                  { name: "Services", link: "/#services" },
                  { name: "Testimonials", link: "/#testimonials" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className={`${
                        isBlack ? "text-black" : "text-white"
                      } font-thin transition duration-300 hover:text-[#de9017]`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {!isMobile && (
            <button
              className={`bg-transperant !py-[12px] !px-8 font-thin bg-white/10  border  ${
                isBlack
                  ? "text-black border-black/20"
                  : "text-white border-white/20"
              } transition duration-300 hover:bg-[#de9017] cursor-pointer !z-10`}
            >
              Contact Us
            </button>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        {isMobile && <Hamburger />}
      </div>
    </header>
  );
};

export default Header;
