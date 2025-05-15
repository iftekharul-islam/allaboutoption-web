import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Api from "../service/http";
import DropdownSelect from "./DropdownSelect";

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
  const [program, setProgram] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [selectedGateway, setSelectedGateway] = useState(1);

  const getProgram = async () => {
    const result = await Api.get("/web/program");
    if (result.status === 200) {
      setProgram(result.data);
    } else {
      console.error("Failed to fetch program data");
    }
  };

  useEffect(() => {
    getProgram();
  }, []);

  useEffect(() => {
    if (selectedPlan == 2) {
      setSelectedGateway(2);
    }
  }, [selectedPlan]);

  const enrollNow = async () => {};

  return (
    <section className="bg-[#0e0e11] text-white py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Ready to take your trading skills to next level? Become a part of our
          elite community of traders today.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
        <div className="bg-black border border-indigo-600 rounded-2xl p-8 w-full lg:w-[420px] shadow-lg">
          <h3 className="text-white text-xl font-bold mb-1">
            {program?.name || "N/A"}
          </h3>
          <p className="text-indigo-400 text-sm mb-1">
            Join now for immediate access
          </p>
          <p className="text-sm text-gray-400 mb-4">Free 7day trial then</p>

          <div className="mb-4">
            <DropdownSelect
              label={"Select Plan"}
              options={[
                {
                  label: "$" + program?.monthly_price + " (1 Month)",
                  value: 1,
                },
                {
                  label: "$" + program?.yearly_price + " (1 Year)",
                  value: 2,
                },
              ]}
              selected={selectedPlan}
              onChange={(value) => setSelectedPlan(value)}
            />
            <p className="text-sm text-red-400 mt-1">Cancel anytime</p>
          </div>

          <div className="flex items-center justify-evenly mb-4">
            {selectedPlan == 1 && (
              <div
                className={
                  "border-2 rounded-full px-4 py-2 cursor-pointer " +
                  (selectedGateway === 1
                    ? "border-black text-black bg-indigo-500"
                    : "border-white-600 text-white-500")
                }
                onClick={() => setSelectedGateway(1)}
              >
                Stripe
              </div>
            )}
            <div
              className={
                "border-2 rounded-full px-4 py-2 cursor-pointer " +
                (selectedGateway === 2
                  ? "border-black text-black bg-indigo-500"
                  : "border-white-600 text-white-500")
              }
              onClick={() => setSelectedGateway(2)}
            >
              Paypal
            </div>
          </div>

          <button
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full font-semibold mb-3"
            onClick={enrollNow}
          >
            Enroll Now
          </button>
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-full font-medium">
            Request a call
          </button>

          <p className="text-sm text-gray-400 mt-4">
            Act fast, seats are limited!
          </p>
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
