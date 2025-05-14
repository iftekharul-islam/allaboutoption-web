import { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../service/http";

const Registration = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false);

    if (isLoggedIn) {   
        window.location.href = "/profile";
    }

  const [formData, setFormData] = useState({
    first_name: "",
    phone: "",
    dob: "",
    email: "",
    password: "",
    password_confirmation: "",
    referralCode: "",
    agree: true,
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Api.post("/web/register", formData)
    if (response.status === 201) {
      window.location.href = "/signin";
    } else {
      setError(response?.data?.errors);
    }
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 my-5">
      <div className="w-full max-w-3xl bg-gray-800 rounded-3xl p-10 shadow-2xl text-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Sign up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1">Full name</label>
              <input
                type="text"
                name="first_name"
                value={formData?.first_name}
                onChange={handleChange}
                placeholder="Type here..."
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <span className="text-red-500 text-sm">
                {error?.first_name ? error?.first_name[0] : ""}
              </span>
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                placeholder="Type here..."
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <span className="text-red-500 text-sm">
                {error?.phone ? error?.phone[0] : ""}
              </span>
            </div>
            <div>
              <label className="block mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData?.dob}
                onChange={handleChange}
                placeholder="MM/DD/YYYY"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <span className="text-red-500 text-sm">
                {error?.dob ? error?.dob[0] : ""}
              </span>
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                placeholder="member@gmail.com"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <span className="text-red-500 text-sm">
                {error?.email ? error?.email[0] : ""}
              </span>
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData?.password}
                onChange={handleChange}
                placeholder="At least 8 character"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <span className="text-red-500 text-sm">
                {error?.password ? error?.password[0] : ""}
              </span>
            </div>
            <div>
              <label className="block mb-1">Repeat password</label>
              <input
                type="password"
                name="password_confirmation"
                value={formData?.password_confirmation}
                onChange={handleChange}
                placeholder="At least 8 character"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <span className="text-red-500 text-sm">
                {error?.password_confirmation
                  ? error?.password_confirmation[0]
                  : ""}
              </span>
            </div>
          </div>

          <div>
            <label className="block mb-1">
              Enter Referral code{" "}
              <span className="text-blue-400 text-sm">(Optional)</span>
            </label>
            <input
              type="text"
              name="referralCode"
              value={formData?.referralCode}
              onChange={handleChange}
              placeholder="Enter Referral code"
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="agree"
              checked={formData?.agree}
              onChange={handleChange}
              className="mr-2 accent-violet-500"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 transition-all text-white py-3 rounded-lg font-medium mt-4"
          >
            Sign up
          </button>

          <p className="text-center text-sm mt-4">
            Already a member?{" "}
            <Link to="/signin" className="text-blue-400 underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
