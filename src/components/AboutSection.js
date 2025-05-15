import smart_mentor from '../assets/smart_mentor.png'; // replace with your image path

const AboutSection = () => {
  return (
    <section className="bg-[#0e0e11] text-white py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Meet your Mentors</h2>

          <h3 className="text-xl font-semibold mb-2">Hey, Dear Concern</h3>
          {/* <p className="text-indigo-400 mb-4">18+ years experience</p> */}

          <p className="text-gray-300 leading-relaxed mb-6">
            Our group mentors have many years of experience in the American options financial markets, specializing in Options Scalp Trading Strategies and Time Frames. They will guide you through the Ingredients of our Trading Options Setups, Relative Strength Index Demystified, Step Pattern Breakout Strategy, Sequencing Strategy, and Momentum Strategy.
          </p>

          {/* Floating Card */}
          <div className="bg-gradient-to-b from-[#1a1a1f] to-[#15151a] mt-8 p-4 rounded-xl shadow-lg max-w-md">
            <h4 className="font-semibold text-white text-lg mb-2">Trading Mentor</h4>
            <p className="text-sm text-gray-300">
              He specializes in Trading Strategies and Time Frames. He will guide you
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
