import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ServiceDetailPage from "./components/ServiceDetailPage/ServiceDetailPage.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import ContactUs from "./components/ContactForm/ContactForm.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:slug" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
