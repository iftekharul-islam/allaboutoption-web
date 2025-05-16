import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path to your logo
import OtpInput from "../components/OtpInput";
import Api from "../service/http";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    otpSend: false,
    otp: "",
    verified: false,
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
    buttonText: "Send OTP",
    buttonDisabled: false,
    countDown: 0,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name] : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const toggleConfirmPasswordVisibility = () => {
    setFormData((prev) => ({
      ...prev,
      showConfirmPassword: !prev.showConfirmPassword,
    }));
  };

  const resendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
      const res = await Api.post("/web/resend-otp", { email: formData?.email })
      if(res?.status == 200) {
        setFormData((prev) => ({
          ...prev,
          otpSend: true,
          buttonText: "Verify OTP",
          verified: false,
          countDown: 60,
        }));
        setError("");
      } else {
        alert(res?.data?.message || "Failed to send OTP");
        setError(res?.data?.message || "Failed to send OTP");
      }
    setLoading(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if(formData?.buttonText == "Send OTP") {
      const res = await Api.post("/web/send-otp", { email: formData?.email })
      if(res?.status == 200) {
        setFormData((prev) => ({
          ...prev,
          otpSend: true,
          buttonText: "Verify OTP",
          countDown: 60,
        }));
        setError("");
      } else {
        setError(res?.data?.message || "Failed to send OTP");
      }
    }

    if(formData?.buttonText == "Verify OTP") {
      const res = await Api.post("/web/verify-otp", { email: formData?.email, otp: formData?.otp })
      if(res?.status == 200) {
        setFormData((prev) => ({
          ...prev,
          verified: true,
          buttonText: "Reset Password",
          buttonDisabled: false,
        }));
        setError("");
      } else {
        setError(res?.data?.message || "Failed to send OTP");
      }
    }

    if(formData?.buttonText == "Reset Password") {
      const res = await Api.post("/web/reset-password", { 
        email: formData?.email, 
        otp: formData?.otp,
        password: formData?.password,
        confirm_password: formData?.confirmPassword,
      })
      if(res?.status == 200) {
        alert(res?.data?.message || "Password reset successfully");
        navigate("/signin");
        setError("");
      } else {
        setError(res?.data?.message || "Failed to send OTP");
      }
    }

    // const response = await Api.post("/web/login", formData);
    // if (response.status === 200) {
    //   localStorage.setItem("accessToken", JSON.stringify(response.data.access));
    //   localStorage.setItem("user", JSON.stringify(response.data.user));
    //   let url = "/profile";
    //   window.location.href = url;
    // } else {
    //   setError(response?.data?.message || "Login failed");
    //   console.error("Login failed");
    // }

    setLoading(false);
  };

  useEffect(() => {
    let interval;
    if (formData?.countDown > 0) {
      interval = setInterval(() => {
        setFormData((prev) => ({
          ...prev,
          countDown: prev.countDown - 1,
        }));
      }, 1000);
    } else if (formData?.countDown === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }
  , [formData?.countDown]);

  return (
    <div className="flex items-center justify-center bg-white px-4 mt-5">
      <div className="w-full max-w-md bg-gray-800 rounded-3xl p-10 shadow-2xl text-white text-center">
        {/* Icon */}
        <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-white">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <h2 className="text-3xl font-semibold mb-4">Forget Password</h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="member@gmail.com"
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-center text-sm">
            <button disabled={formData?.countDown > 0 || loading} className="flex items-center text-[#2C9BF6] disabled:text-white" onClick={resendOtp}>
              {formData?.countDown > 0 ? <>
                
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
                <span className="text-sm">{formData?.countDown} seconds</span>
              </> : "Send Again"}
            </button>
          </div>

          {formData?.otpSend && 
          <>
          <OtpInput length={6} value={formData.otp} onChange={(value)=> {
            setFormData((prev) => ({
      ...prev,
      otp : value,
    }));
          }} />

{formData?.verified && <> 
                    <div className="relative">
            <label className="block mb-1">Password</label>
            <input
              type={formData?.showPassword ? "text" : "password"}
              name="password"
              value={formData?.password}
              onChange={handleChange}
              placeholder="Choose one"
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 bottom-2 text-gray-400 hover:text-gray-100"
            >
              {formData?.showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              )}
            </button>
          </div>

                    <div className="relative">
            <label className="block mb-1">Confirm Password</label>
            <input
              type={formData?.showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData?.confirmPassword}
              onChange={handleChange}
              placeholder="Choose one"
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 bottom-2 text-gray-400 hover:text-gray-100"
            >
              {formData?.showConfirmPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              )}
            </button>
          </div>
          </>}

          </>}

          {/* Submit Button */}
          {/* <div className="flex items-center justify-between mt-4"> */}
          <div className="text-red-500 text-sm w-full text-center font-medium">
            {error ? error : ""}
          </div>
          {/* </div> */}
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 transition-all text-white py-3 rounded-lg font-medium disabled:opacity-50"
            disabled={loading || formData?.buttonDisabled}
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
              formData?.buttonText
            )}
          </button>

          {/* Sign up link */}
          <p className="text-center text-sm mt-4">
            Looking to{" "}
            <Link to="/signin" className="text-blue-400 underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
