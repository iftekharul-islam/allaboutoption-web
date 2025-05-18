import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path to your logo
import FacebookLoginButton from "../components/FacebookLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { GOOGLE_CLIENT_ID } from "../config";
import Api from "../service/http";

const SigninForm = () => {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");
  const tag = params.get("tag");

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("accessToken") ? true : false
  );
  const [loading, setLoading] = useState(false);

  if (isLoggedIn) {
    let url = "/profile";
    if (redirect) {
      url = redirect;
      if (tag) {
        url += `#${tag}`;
      }
    }
    window.location.href = url;
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: true,
    showPassword: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ ...formData, type: "manual" });
  };

  const handleLogin = async (data) => {
    setLoading(true);
    const response = await Api.post("/web/login", data);
    if (response.status === 200) {
      localStorage.setItem("accessToken", JSON.stringify(response.data.access));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      let url = "/profile";
      if (redirect) {
        url = redirect;
        if (tag) {
          url += `#${tag}`;
        }
      }
      window.location.href = url;
    } else {
      setError(response?.data?.message || "Login failed");
      console.error("Login failed");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center bg-white px-4 my-5">
      <div className="w-full max-w-md bg-gray-800 rounded-3xl p-10 shadow-2xl text-white text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-white">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <h2 className="text-3xl font-semibold mb-4">Sign in</h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="member@gmail.com"
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1">Password</label>
            <input
              type={formData.showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose one"
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 bottom-2 text-gray-400 hover:text-gray-100"
            >
              {formData.showPassword ? (
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="mr-2 accent-violet-500"
              />
              Remember password
            </label>
            <Link
              to="/forget-password"
              className="text-blue-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          {/* <div className="flex items-center justify-between mt-4"> */}
          <div className="text-red-500 text-sm w-full text-center font-medium">
            {error ? error : ""}
          </div>
          {/* </div> */}
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 transition-all text-white py-3 rounded-lg font-medium"
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
              "Sign in"
            )}
          </button>

          <div className="flex items-center justify-center mt-4">
            <div>
              <div className="flex items-center justify-center">
                <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                  <GoogleLoginButton handleLogin={handleLogin} />
                </GoogleOAuthProvider>
              </div>

              <FacebookLoginButton handleLogin={handleLogin} />
            </div>
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm mt-2">
            Looking to{" "}
            <Link to="/signup" className="text-blue-400 underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
