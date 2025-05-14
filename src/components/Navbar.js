import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png'; // place your image in src/assets/logo.png';
import defaultAvatar from '../assets/smart_mentor.png'; // optional default avatar

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#6756FE] text-white text-sm text-center py-2 font-semibold tracking-wide">
        JOIN 4,000+ Subscribers AND MASTER TRADING CLASS
      </div>

      <nav className="flex justify-between items-center px-20 py-2 bg-white shadow-md">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-indigo-600 font-bold text-lg">
            It’s all About the Options
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <HashLink
            smooth
            to="/#home"
            className="text-gray-800 hover:text-indigo-600 font-medium"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="text-gray-800 hover:text-indigo-600 font-medium"
          >
            About Us
          </HashLink>
          <HashLink
            smooth
            to="/#pricing"
            className="text-gray-800 hover:text-indigo-600 font-medium"
          >
            Pricing
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="bg-indigo-50 text-indigo-600 font-semibold px-4 py-2 rounded-md hover:bg-indigo-100"
          >
            Contact
          </HashLink>

          {!isLoggedIn ? (
            <>
              <Link
                to="/signin"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Sign up
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img
                  src={user?.dp || defaultAvatar}
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover border-2 border-indigo-600"
                />
                <span className="text-gray-800 font-semibold">
                  {user?.first_name || 'User'}
                </span>
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute bg-gray-100 right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
