import logo1 from "../../assets/images/1.png";
import logo2 from "../../assets/images/2.png";
import logo3 from "../../assets/images/3.png";
import logo4 from "../../assets/images/4.png";
import logo5 from "../../assets/images/5.png";
import logo6 from "../../assets/images/6.png";
import logo7 from "../../assets/images/7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

export default function LogoSlider() {
  return (
    <div className="w-full overflow-hidden relative py-[100px]">
      <style>
        {`
          /* Left → Right */
          @keyframes marquee-left {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }

          /* Right → Left */
          @keyframes marquee-right {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .track {
            display: flex;
            width: 200%;
          }

          .wrapper-left {
            display: flex;
            animation: marquee-right 20s linear infinite;
          }

          .wrapper-right {
            display: flex;
            animation: marquee-left 20s linear infinite;
          }

          .logo-item {
            flex-shrink: 0;
            padding: 0 40px;
            opacity: 0.85;
            transition: opacity 0.3s ease;
          }

          .logo-item:hover {
            opacity: 1;
          }
        `}
      </style>

      {/* Heading */}
      <div className="px-4 text-center mb-14">
        <h2 className="text-4xl font-bold">Our Valued Clients</h2>
        <p className="w-full md:w-1/2 mx-auto text-gray-500 mt-4">
          We work with trusted brands and clients across multiple industries,
          delivering reliable materials and long-term value.
        </p>
      </div>

      {/* Row 1 — Right → Left */}
      <div className="track">
        <div className="wrapper-right">
          {logos.map((logo, i) => (
            <div key={i} className="logo-item">
              <img src={logo} width={130} alt={`logo-${i}`} />
            </div>
          ))}
        </div>

        {/* duplicate */}
        <div className="wrapper-right" aria-hidden="true">
          {logos.map((logo, i) => (
            <div key={`dup1-${i}`} className="logo-item">
              <img src={logo} width={130} alt={`logo-${i}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Left → Right */}
      <div className="track mt-12">
        <div className="wrapper-left">
          {logos.map((logo, i) => (
            <div key={i} className="logo-item">
              <img src={logo} width={130} alt={`logo-${i}`} />
            </div>
          ))}
        </div>

        {/* duplicate */}
        <div className="wrapper-left" aria-hidden="true">
          {logos.map((logo, i) => (
            <div key={`dup2-${i}`} className="logo-item">
              <img src={logo} width={130} alt={`logo-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
