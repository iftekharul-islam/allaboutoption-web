import { FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-[#f9f9fa] py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        
        {/* Left Column: Info */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-base mb-2">
            Need to get in touch with us? Either fill out the form with your inquiry or find the{" "}
            <span className="text-indigo-500 underline">Department email</span> you’d like to contact below.
          </p>

          {/* Callout Box */}
          <div className="relative bg-white border border-indigo-400 rounded-xl p-5 mt-8 shadow-md">
            <h3 className="text-indigo-600 font-semibold text-lg mb-1">Ditch the guesswork!</h3>
            <p className="text-indigo-500 text-sm mb-3">Get expert guidance with our Trading Mentorship Program.</p>
            <p className="text-black font-semibold text-sm">Have Questions?</p>
            <p className="text-black text-sm">
              Dial <a href="tel:+564556545" className="text-indigo-600 font-semibold">+56 455 6545</a> to connect with our program advisor.
            </p>
            <FaQuestionCircle className="absolute top-4 right-4 text-indigo-500 text-xl" />
          </div>

          {/* Request Call Button */}
          <button className="mt-6 flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-600 transition">
            <FaPhoneAlt />
            Request a Call
          </button>
        </div>

        {/* Right Column: Form */}
        <div className="lg:w-1/2 w-full bg-gradient-to-br from-[#151515] to-[#0e0e11] rounded-xl p-8 shadow-lg">
          <h3 className="text-white text-xl font-semibold mb-1">Fill the form to know more</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full p-3 rounded bg-[#1d1d1f] text-white placeholder-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 rounded bg-[#1d1d1f] text-white placeholder-gray-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full p-3 rounded bg-[#1d1d1f] text-white placeholder-gray-400 outline-none"
            />
            <textarea
              placeholder="Type your question"
              rows="4"
              className="w-full p-3 rounded bg-[#1d1d1f] text-white placeholder-gray-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
