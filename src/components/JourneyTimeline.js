

const TimelineItem = ({ title, subtitle, content }) => (
  <div className="relative mb-10 pl-6 border-l border-indigo-600">
    <div className="absolute -left-[10px] top-1 w-4 h-4 bg-black border-2 border-indigo-500 rounded-full"></div>
    <h4 className="text-indigo-400 font-semibold text-sm">{title}</h4>
    <h3 className="text-white font-bold text-base mb-2">{subtitle}</h3>
    <p className="text-gray-300 text-sm">{content}</p>
  </div>
);

const JourneyTimeline = () => {
  const leftTimeline = [
    {
      title: "Week 1 - Week 6",
      subtitle: "Understanding Technical Analysis",
      content:
        "Understanding Market Structure, Candlesticks, Technical Theories, Trading Masterclass, Indicators, Trend Indicators, Momentum Indicators, Volatility Indicators, and Volume Profile",
    },
    {
      title: "Week 8 - Week 12",
      subtitle: "Options Strategies",
      content:
        "Options Trading, Introduction to Derivatives, Learning Options Greeks, Options Strategies, Options Repairs and Adjustment, Max Pain Theory and Trading Rules",
    },
    {
      title: "Week 17 - Week 25",
      subtitle: "Understanding Trading Strategies",
      content:
        "Trading Strategies and time Frames, Ingredients of our Trading Setups, Relative Strength Index Demystified, Trading Masterclass, Breakout Strategy, Contrarian Strategy, and PullBack Strategy",
    },
    {
      title: "Access to StockEdge Social",
      subtitle: "",
      content:
        "Access to StockEdge Social, our community of over 15,000 traders, where you can discuss ideas and strategies with peers and domain experts. It’s the perfect platform to level up your networking with other traders.",
    },
  ];

  const rightTimeline = [
    {
      title: "Week 7",
      subtitle: "Defining RS Theory",
      content: "Strength Theory and RS Theory Masterclass",
    },
    {
      title: "Week 13 - Week 16",
      subtitle: "Mastering Currency & Commodity Trading",
      content:
        "One Good Trade and Grading Concept, Multi-asset portfolio creation, Intermarket Analysis, Basics of Derivatives, Profitable Crude Oil Trading Strategies, Commodity Fundamental including Gold, Silver + Crude Oil and Natural Gas, Trading Strategy.",
    },
    {
      title: "Convocation",
      subtitle: "",
      content:
        "One-on-one interaction with the mentors and wrapping the program by sharing each other's learnings.",
    },
  ];
  return (
    <section className="bg-[#0e0e11] text-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Your Journey for the next 6 Months
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Over the next 6 months, you’ll dive deep into various trading concepts,
          develop practical skills, and gain confidence in your trading abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {leftTimeline.map((item, idx) => (
              <TimelineItem key={idx} {...item} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightTimeline.map((item, idx) => (
              <TimelineItem key={idx} {...item} />
            ))}

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold shadow">
                Request a Call
              </button>
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold shadow">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
