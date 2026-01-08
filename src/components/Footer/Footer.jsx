import React from "react";
import Logo from "../../assets/images/Logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 font-sans">
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/5">
          <div className="w-[80px] mb-4">
            <img src={Logo} alt="Al Materyal Logo" className="w-full block" />
          </div>

          <p className="text-sm text-gray-600 w-full lg:w-4/5 leading-relaxed mb-6">
            Al Materyal FZ LLC is a leading supplier of premium materials for
            the construction, industrial, and marine sectors. With a strong
            commitment to quality and reliability, we deliver solutions
            engineered to support projects of every scale. Our multi-industry
            expertise helps us serve diverse client needs with precision, trust,
            and excellence.
          </p>

          <div className="flex space-x-4 text-gray-500 mb-10">
            <a
              href=""
              className="hover:text-black transition duration-200 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="hover:text-black transition duration-200 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href=""
              className="hover:text-black transition duration-200 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href=""
              className="hover:text-black transition duration-200 text-xl"
            >
              <FaXTwitter />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm pt-4">
            <div className="pr-4">
              <span className="font-semibold text-black block mb-2">Dubai</span>
              <p className="text-gray-600">
                Arenco Offices
                <br />
                Buldding 3, Office No 614, DIP 1
                <br />
                Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 grid grid-cols-3 gap-8 text-sm pt-4">
          <div>
            <h4 className="text-sm text-black font-semibold uppercase mb-6">
              COMPANY
            </h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black">
                  Projects
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-black font-semibold uppercase mb-6">
              SALES
            </h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="block text-gray-900 mb-1">
                  sales@almateryal.com
                </span>
              </li>
              <li>
                <span className="block text-gray-900 mb-1">
                  +971 50 123 4567
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-black font-semibold uppercase mb-6">
              SUPPORT
            </h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="block text-gray-900 mb-1">
                  support@almateryal.com
                </span>
              </li>
              <li>
                <a href="" className="hover:text-black">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="" className="hover:text-black">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-3 text-xs md:text-sm text-gray-500">
          <p className="text-center">
            Copyright © 2025 Al Materyal FZ LLC. All Rights Reserved
          </p>
          <div className="md:ml-6 flex space-x-4">
            <a href="" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="" className="hover:text-black">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
