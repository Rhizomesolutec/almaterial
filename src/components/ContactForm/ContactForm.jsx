import Header from "../Header/Header";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_pmk98ok",
        "template_s938n87",
        formRef.current,
        "8g-eQ6F7UBw35GZgx"
      );

      // alert("Message sent successfully!");
      toast.success("Message sent successfully!");
      // toast("🦄 Wow so easy!", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: false,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full pt-[40px] pb-20 px-6 flex justify-center bg-white">
        <div className="w-full container p-10 flex justify-between relative flex-col md:flex-row">
          <div className="w-full md:w-1/3 md:sticky top-6 h-fit mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h1>

            <p className="text-gray-400 mb-10 text-lg">
              Have questions or want to work with us? Fill out the form and
              we’ll get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:w-2/3 w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 w-full md:ml-10"
            >
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-300 p-4 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 p-4 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full border border-gray-300 p-4 focus:ring-2 focus:ring-blue-400 outline-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#de9017] text-white py-4 shadow-md hover:bg-black transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
