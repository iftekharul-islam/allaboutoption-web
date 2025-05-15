import { FaGraduationCap, FaStar, FaWhatsapp } from 'react-icons/fa';
import mentors from '../assets/mentors.png';
import trade from '../assets/trade.png';

const HeroSection = () => {
  return (
    <section className="bg-white w-full pt-16 px-4 md:px-20 flex flex-col-reverse lg:flex-row items-center justify-between">
      {/* Left Text Content */}
      <div className="max-w-xl text-center lg:text-left">
        <h4 className="text-indigo-600 text-lg font-semibold mb-2">Become an All-Season Options Trader</h4>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Options Trading Mentorship Program
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Join the elite community of multi-asset traders
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
          <div className="flex items-center bg-white border border-indigo-400 rounded-lg shadow px-4 py-3">
            <FaGraduationCap className="text-indigo-500 text-2xl mr-3" />
            <div>
              <div className="text-indigo-600 font-semibold text-lg">4000+</div>
              <div className="text-sm text-gray-600">Total Learners</div>
            </div>
          </div>

          <div className="flex items-center bg-white border border-indigo-400 rounded-lg shadow px-4 py-3">
            <FaStar className="text-indigo-500 text-2xl mr-3" />
            <div>
              <div className="text-indigo-600 font-semibold text-lg">4.8/5</div>
              <div className="text-sm text-gray-600">Program Ratings</div>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/+13034725428" // replace with actual WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-xl" />
          WhatsApp Us
        </a>
      </div>

      {/* Right Image Content */}
      <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center relative">
        {/* Background Image (e.g., candlestick chart) */}
        <img
            src={trade}
            alt="Candlestick Chart"
            className="max-w-full h-auto pb-40"
        />

        {/* Foreground Image (mentors) */}
        <img
            src={mentors}
            alt="Mentors"
            className="absolute bottom-0 right-0 w-3/4 md:w-2/3 lg:w-3/4 h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
