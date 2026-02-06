import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ServiceDetailPage from "./components/ServiceDetailPage/ServiceDetailPage.jsx";
import AdminServices from "./components/Service/AdminServices.jsx";
import AdminLogin from "./components/Auth/AdminLogin.jsx";
import { isAdminAuthenticated } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";
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
        <Route
          path="/admin/services"
          element={
            isAdminAuthenticated() ? (
              <AdminServices />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
