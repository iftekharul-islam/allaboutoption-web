import { FaCheckCircle } from 'react-icons/fa';

const features = [
  "14+ Hours on-demand content",
  "85+ Hours of Live Interactive Sessions",
  "100+ hours of Live Trading Sessions",
  "30-Minutes Counseling Session",
  "Only-Year Community Support",
  "1 Community WhatsApp Group",
  "Free Inbox Chat",
];

const PricingSection = () => {
  return (
    <section className="bg-[#0e0e11] text-white py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Ready to take your trading skills to next level? Become a part of our elite
          community of traders today.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
        <div className="bg-black border border-indigo-600 rounded-2xl p-8 w-full lg:w-[420px] shadow-lg">
          <h3 className="text-white text-xl font-bold mb-1">Trading Mentorship Program</h3>
          <p className="text-indigo-400 text-sm mb-1">Next batch start 6 Jan 2024</p>
          <p className="text-sm text-gray-400 mb-4">Duration: 1 year</p>

          <div className="mb-4">
            <span className="text-red-500 line-through text-lg mr-2">$ 89,999</span>
            <span className="text-indigo-400 text-2xl font-bold">$ 85,999</span>
            <p className="text-sm text-gray-400 mt-1">Option also available</p>
          </div>

          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full font-semibold mb-3">
            Enroll Now
          </button>
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-full font-medium">
            Request a call
          </button>

          <p className="text-sm text-gray-400 mt-4">Act fast, seats are limited!</p>
        </div>

        <div className="flex-1 space-y-4 text-left">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white">
              <FaCheckCircle className="text-indigo-400" />
              <span className="text-base">{item}</span>
            </div>
          ))}

          {/* Bonuses */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-medium">
              3-Month access to StockEdge Social
            </div>
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-medium">
              1-Year access to StockEdge Premium
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
