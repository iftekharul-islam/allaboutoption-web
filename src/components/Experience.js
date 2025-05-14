
import experience_graph from "../assets/experience_graph.png";

const Experience = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">✨</span>
            <p className="font-semibold text-black">
              Recommended By <span className="text-indigo-600 font-bold">4000+ </span>Students
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
            Experience the difference in your trading skills
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            After 6 months, you will be able to experience the difference in your knowledge and skills.
            You will be making informed trading decisions while effectively managing risk and maximizing profits.
          </p>
        </div>

        {/* Right Chart Card */}
        <div>
          <p className="text-sm text-right text-indigo-600 font-semibold mb-2">
            AFTER 6 MONTHS
          </p>
          <div className=" w-full flex justify-center items-center relative">
              <img
                src={experience_graph}
                alt="Growth Chart"
                className="w-full bg-indigo-50 rounded-xl shadow-sm"
              />
              <div className="absolute top-6 left-6 text-white px-3 py-1 text-lg">
                <h3 className="text-gray-800 font-medium text-lg mb-6 text-center">
                    You will know effective methods for selecting{" "}
                    <span className="text-indigo-600 text-lg font-semibold">High-potential stock</span>
                </h3>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
