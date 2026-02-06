import React from "react";
import Header from "../../components/Header/Header";
import Spotlight from "../../components/Spotlight/Spotlight";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";
import Stats from "../Stats/Stats";
import Service from "../../components/Service/Service";
import TestimonialSection from "../Testimonial/Testimonial";
import ContactUs from "../ContactForm/ContactForm";
import MaterialSlider from "../MaterialSlider/MaterialSlider";
import useServices from "../../hooks/useServices";
import LogoSlider from "../LogoSlider/LogoSlider";

const Home = () => {
  const { services } = useServices();

  return (
    <div>
      <Header />
      <Spotlight />
      <MaterialSlider />
      <AboutUs />
      <Stats />
      <LogoSlider />
      <Service data={services} />
      {/* <TestimonialSection /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
