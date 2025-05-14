import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png'; // place your image in src/assets/logo.png

const Navbar = () => {
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
          <HashLink smooth to="/#home" className="text-gray-800 hover:text-indigo-600 font-medium">Home</HashLink>
          <HashLink smooth to="/#about" className="text-gray-800 hover:text-indigo-600 font-medium">About Us</HashLink>
          <HashLink smooth to="/#pricing" className="text-gray-800 hover:text-indigo-600 font-medium">Pricing</HashLink>
          <HashLink smooth to="/#contact" className="bg-indigo-50 text-indigo-600 font-semibold px-4 py-2 rounded-md hover:bg-indigo-100">
            Contact
          </HashLink>

          <Link to="/signin" className="text-indigo-600 font-semibold hover:underline">
            Sign in
          </Link>
          <Link to="/signup" className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700">
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
