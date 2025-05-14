import { FaYoutube } from 'react-icons/fa';
import smart_mentor from '../assets/smart_mentor.png'; // replace with your image path

const AboutSection = () => {
  return (
    <section className="bg-[#0e0e11] text-white py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Meet your Mentors</h2>

          <h3 className="text-xl font-semibold mb-2">Hey, Dear Your Name</h3>
          <p className="text-indigo-400 mb-4">18+ years experience</p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Name Here has over 18 years of experience in the USA financial markets,
            serving as Technical Research Head, PMS Fund Manager, and an active
            trainer in the field of Technical Analysis and Trading. He had held key
            positions at ICICI Securities and BRICS Securities. As a technical analysis
            trainer, he visits various business schools and institutions such as IIMC,
            NSE Academy, NIBM Pune, BIBS Kolkata, India Infoline, and, of course,
            elearn markets. He was also a regular face on many business channels such
            as CNBC, Zee Business, Bloomberg, CNBC Awaaz, and Moneycontrol.
            He holds an MBA in Finance from Mumbai and a B.Sc in Economics from
            the University of Calcutta.
          </p>

          <button className="inline-flex items-center gap-2 text-white px-4 py-2 border border-indigo-400 rounded-full hover:bg-indigo-500 transition">
            <FaYoutube className="text-red-500" />
            Watch His Journey
          </button>

          {/* Floating Card */}
          <div className="bg-gradient-to-b from-[#1a1a1f] to-[#15151a] mt-8 p-4 rounded-xl shadow-lg max-w-md">
            <h4 className="font-semibold text-white text-lg mb-2">Trading Mentor</h4>
            <p className="text-sm text-gray-300">
              Name Here specializes in Trading Strategies and Time Frames. He will guide you
              through the Ingredients of our Trading Setups, Relative Strength Index Demystified,
              Breakout Strategy, Contrarian Strategy, and Pull Back Strategy.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={smart_mentor}
              alt="Mentor"
              className="w-80 max-w-sm lg:max-w-md object-contain z-10 relative"
            />
            <div className="absolute -top-4 -left-4 w-full h-full rounded-full border border-indigo-500 blur-xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
