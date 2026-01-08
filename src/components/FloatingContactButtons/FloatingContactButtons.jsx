import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const PHONE_NUMBER = "+971527479685"; // change to your number
const WHATSAPP_NUMBER = "+971527479685"; // without + and spaces

const FloatingContactButtons = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20your%20service`;
  const callLink = `tel:${PHONE_NUMBER}`;

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg
                   bg-green-500 hover:bg-green-600 transition transform hover:-translate-y-1"
      >
        <FaWhatsapp className="text-white text-2xl md:text-3xl" />
      </a>

      {/* Call */}
      <a
        href={callLink}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg
                   bg-blue-500 hover:bg-blue-600 transition transform hover:-translate-y-1"
      >
        <FiPhone className="text-white text-2xl md:text-3xl" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
