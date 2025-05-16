import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../service/http";
import CardForm from "./CardForm";
import DropdownSelect from "./DropdownSelect";
import StripeProvider from "./StripeProvider";

const features = [
  "14+ Hours on-demand content (Coming Soon!)",
  "85+ Hours of Live Interactive Sessions (Coming Soon!)",
  "100+ hours of Live Trading Sessions (Coming Soon!)",
  "Coaching",
  "App Chat Group",
];

const PricingSection = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("accessToken") ? true : false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [program, setProgram] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [selectedGateway, setSelectedGateway] = useState("stripe");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
      setSelectedGateway("paypal");
    }
  }, [selectedPlan]);

  const enrollNow = async () => {
    if (!isLoggedIn) {
      window.location.href = "/signin?redirect=/&tag=pricing";
      return;
    }
    setLoading(true);
    try {
      const result = await Api.post("/web/create-payment-intent", {
        term: selectedPlan,
        gateway: selectedGateway,
        program_id: program.id,
      });
      if (result?.data?.approveLink && selectedGateway === "paypal") {
        window.location.href = result.data.approveLink;
      }
      if (
        result?.data?.setupIntentClientSecret &&
        selectedGateway === "stripe"
      ) {
        setClientSecret(result.data.setupIntentClientSecret);
      }
    } catch (error) {
      console.error("Error during enrollment:", error);
    }

    setLoading(false);
  };

  const handleStripeCompletion = async (setupIntent) => {
    if (setupIntent?.error) {
      alert("Error: " + setupIntent.error.message);
    } else {
      const res = await Api.post("/web/create-subscription", {
        gateway: "stripe",
        program_id: program?.id,
        term: selectedPlan,
      });

      var result = null;
      while (true) {
        result = await Api.get("/web/user-expiration");
        if (result?.data?.active) {
          navigate("/profile");
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  };

  const getProfile = async() => {
    const res = await Api.get("/web/profile");
    if(res?.data?.user){
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      setUser(res?.data?.user);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getProfile();
    }
  }, []);

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

          {!user?.expired_at ? (
            <span>
              <div className="flex items-center justify-evenly mb-4">
                {selectedPlan == 1 && (
                  <div
                    className={
                      "border-2 rounded-full px-4 py-2 cursor-pointer " +
                      (selectedGateway === "stripe"
                        ? "border-black text-black bg-indigo-500"
                        : "border-white-600 text-white-500")
                    }
                    onClick={() => setSelectedGateway("stripe")}
                  >
                    Stripe
                  </div>
                )}
                <div
                  className={
                    "border-2 rounded-full px-4 py-2 cursor-pointer " +
                    (selectedGateway === "paypal"
                      ? "border-black text-black bg-indigo-500"
                      : "border-white-600 text-white-500")
                  }
                  onClick={() => setSelectedGateway("paypal")}
                >
                  Paypal
                </div>
              </div>

              {!clientSecret ? (
                <button
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full font-semibold mb-3"
                  onClick={enrollNow}
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
                    "Enroll Now"
                  )}
                </button>
              ) : (
                <div className="mb-4">
                  <StripeProvider>
                    <CardForm
                      clientSecret={clientSecret}
                      onComplete={handleStripeCompletion}
                    />
                  </StripeProvider>
                </div>
              )}

              <p className="text-sm text-gray-400 mt-4">
                Act fast, seats are limited!
              </p>
            </span>
          ) : (
            <span>
              <p className="text-sm text-gray-400 mb-4">
                You are already subscribed.
              </p>
              <button
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-full font-medium"
                onClick={() => navigate("/profile")}
              >
                Go to Profile
              </button>
            </span>
          )}
        </div>

        <div className="space-y-4 text-left">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white">
              <FaCheckCircle className="text-indigo-400" />
              <span className="text-base">{item}</span>
            </div>
          ))}

          {/* Bonuses */}
          {/* <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-medium">
              3-Month access to StockEdge Social
            </div>
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-medium">
              1-Year access to StockEdge Premium
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
