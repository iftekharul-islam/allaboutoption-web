import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import Api from "../service/http";

const ContactSection = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitContactForm = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);

    const res = await Api.post("/web/submit-contact-form", data);
    if (res.status === 200) {
      alert("Form submitted successfully");
      setData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to submit form");
    }
    setLoading(false);
  };

  return (
    <section className="bg-[#f9f9fa] py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Column: Info */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 text-base mb-2">
            Need to get in touch with us? Either fill out the form with your
            inquiry or email{" "}
            <a
              href="mailto:accounts@itsallaboutheoptions.com"
              className="text-indigo-500 underline"
            >
              accounts@itsallaboutheoptions.com
            </a>
            .
          </p>

          {/* Callout Box */}
          <div className="relative bg-white border border-indigo-400 rounded-xl p-5 mt-8 shadow-md">
            <h3 className="text-indigo-600 font-semibold text-lg mb-1">
              Ditch the guesswork!
            </h3>
            <p className="text-indigo-500 text-sm mb-3">
              Get expert guidance with an Options Trading Mentorship Program.
            </p>
            <p className="text-black font-semibold text-sm">Have Questions?</p>
            <p className="text-black text-sm">
              Connect via WhatsApp to connect with our program advisor.
            </p>
            <FaQuestionCircle className="absolute top-4 right-4 text-indigo-500 text-xl" />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:w-1/2 w-full bg-gradient-to-br from-[#151515] to-[#0e0e11] rounded-xl p-8 shadow-lg">
          <h3 className="text-white text-xl font-semibold mb-1">
            Fill the form to know more
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              value={data?.name}
              name="name"
              onChange={onChangeData}
              placeholder="Full Name*"
              className="w-full p-3 rounded bg-[#1d1d1f] text-white placeholder-gray-400 outline-none"
            />
            <input
              type="email"
              value={data?.email}
              name="email"
              onChange={onChangeData}
              placeholder="Email*"
              className="w-full p-3 rounded bg-[#1d1d1f] text-white placeholder-gray-400 outline-none"
            />
            <textarea
              value={data?.message}
              name="message"
              onChange={onChangeData}
              placeholder="Type your question"
              rows="4"
              className="w-full p-3 rounded bg-[#1d1d1f] text-white placeholder-gray-400 outline-none"
            ></textarea>
            {/* <button
              type="submit"
              onClick={submitContactForm}
              disabled={loading}
              className="disabled:bg-red-500 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded transition"
            >
              Submit
            </button> */}
            <button
              type="submit"
              onClick={submitContactForm}
              className="w-full bg-violet-600 hover:bg-violet-700 transition-all text-white py-3 rounded-lg font-medium disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" />
                  <line x1="12" y1="6" x2="12" y2="12" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
