import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png';
import defaultAvatar from '../assets/smart_mentor.png';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef();
  const mobileMenuRef = useRef();
  const closingMenuRef = useRef(false); 

  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const toggleMobileMenu = () => {
    if (!closingMenuRef.current) {
      setMobileMenuOpen(prev => !prev);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
    window.location.href = '/';
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        if (!closingMenuRef.current) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#6756FE] text-white  text-xs md:text-sm text-center py-2 font-semibold tracking-wide">
        JOIN 4,000+ Subscribers AND MASTER TRADING CLASS
      </div>

      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-20 py-2 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="hidden sm:inline text-indigo-600 font-bold text-lg">
            It's all About the Options
          </span>
        </div>

        <div className="flex items-center sm:hidden">
          <button
            onClick={() => {
              closingMenuRef.current = true;
              setMobileMenuOpen(false);
              setTimeout(() => {
                closingMenuRef.current = false;
              }, 200); // prevent reopen on document click
            }}
            className={`text-gray-800 hover:text-indigo-600 focus:outline-none ${mobileMenuOpen ? '' : 'hidden'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={toggleMobileMenu}
            className={`text-gray-800 hover:text-indigo-600 focus:outline-none ${mobileMenuOpen ? 'hidden' : ''}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center space-x-6">
          {['home', 'about', 'pricing', 'contact'].map((section) => (
            <HashLink
              key={section}
              smooth
              to={`/#${section}`}
              className={`px-4 py-2 rounded-md font-medium ${
                location.hash === `#${section}` || (section === 'home' && location.hash === '')
                  ? 'bg-indigo-50 text-indigo-600 font-semibold'
                  : 'text-gray-800 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
            </HashLink>
          ))}

          {!isLoggedIn ? (
            <>
              <Link
                to="/signin"
                className={`px-4 py-2 rounded-md font-medium ${
                  isActive('/signin')
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50'
                }`}
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
                <span className="text-gray-800 font-semibold">{user?.first_name || 'User'}</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute bg-white right-0 mt-2 w-40 rounded-md shadow-lg py-2 z-50">
                  <Link
                    to="/profile"
                    className={`block px-4 py-2 text-sm ${
                      isActive('/profile')
                        ? 'bg-indigo-50 text-indigo-600 font-semibold'
                        : 'text-gray-700 hover:bg-indigo-50'
                    }`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div ref={mobileMenuRef} className="absolute top-full left-0 right-0 bg-white shadow-lg sm:hidden z-50">
            <div className="flex flex-col space-y-4 p-4">
              {['home', 'about', 'pricing', 'contact'].map((section) => (
                <HashLink
                  key={section}
                  smooth
                  to={`/#${section}`}
                  className={`px-4 py-2 rounded-md font-medium ${
                    location.hash === `#${section}` || (section === 'home' && location.hash === '')
                      ? 'bg-indigo-50 text-indigo-600 font-semibold'
                      : 'text-gray-800 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </HashLink>
              ))}

              {!isLoggedIn ? (
                <>
                  <Link
                    to="/signin"
                    className={`px-4 py-2 rounded-md font-medium ${
                      isActive('/signin')
                        ? 'bg-indigo-50 text-indigo-600 font-semibold'
                        : 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/profile"
                    className={`px-4 py-2 rounded-md font-medium ${
                      isActive('/profile')
                        ? 'bg-indigo-50 text-indigo-600 font-semibold'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left text-gray-700 px-4 py-2 rounded-md hover:bg-indigo-50"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
