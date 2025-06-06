import {
  FaFacebookF,
  FaStackExchange,
  FaYoutube
} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png'; // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-[#0e0e11] text-white pt-16 px-4 md:px-20">
      {/* Top Social Media Row */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold mb-4">Social Media</h3>
        <div className="flex flex-wrap gap-6 justify-center items-center text-gray-300">
          <div className="flex items-center gap-2">
          <a href="https://youtube.com/@allabouttheoptions4376" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-xl" />
          </a>
            {/* <span>15.1K+ Subscribers</span> */}
          </div>
          <div className="flex items-center gap-2">
          <a href="https://www.facebook.com/groups/652909564891054" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl" />
          </a>
            {/* <span>15.1K+ Followers</span> */}
          </div>
          <div className="flex items-center gap-2">
          <a href="https://stocktwits.com/itsallaboutheoptions" target="_blank" rel="noopener noreferrer">
            <FaStackExchange className="text-xl" />
          </a>
            {/* <span>15.1K+ Followers</span> */}
          </div>
          <div className="flex items-center gap-2">
          <a href="https://x.com/aboutheoptions" target="_blank" rel="noopener noreferrer">
            <FaX className="text-xl" />
          </a>
            {/* <span>15.1K+ Followers</span> */}
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mb-10" />

      {/* Footer Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-16 text-gray-300">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Top Traxxas" className="w-8 h-8" />
            <h4 className="text-xl font-bold">
              <span className="text-indigo-500">It’s all About the Options</span>
            </h4>
          </div>
          <p className="text-sm leading-relaxed">
            © 2016 It's All About The Options. All rights reserved. <br />
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-semibold text-white mb-4">Site Address</h5>
          <ul className="space-y-2 text-sm">
            <li><HashLink smooth to="/#home" className="hover:text-indigo-400">Home</HashLink></li>
            <li><HashLink smooth to="/#about" className="hover:text-indigo-400">About Us</HashLink></li>
            <li><HashLink smooth to="/#pricing" className="hover:text-indigo-400">Pricing</HashLink></li>
            <li><HashLink smooth to="/#contact" className="hover:text-indigo-400">Contact</HashLink></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-4">Site Links</h5>
          <ul className="space-y-2 text-sm">
            <li><HashLink smooth to="/terms" className="hover:text-indigo-400">Terms & Conditions</HashLink></li>
            <li><HashLink smooth to="/privacy-policy" className="hover:text-indigo-400">Privacy policy</HashLink></li>
          </ul>
        </div>

        {/* Newsletter */}
        {/* <div>
          <h5 className="font-semibold text-white mb-2">Subscribe Our News</h5>
          <p className="text-sm mb-4">
            Hey! Are you tired of missing out on updates? Subscribe to our news and stay in the loop!
          </p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded bg-[#1d1d1d] placeholder-gray-400 text-white mb-4 outline-none"
          />
          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded font-semibold">
            Submit
          </button>
        </div> */}
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Credit */}
      <div className="text-center text-sm text-gray-500 py-4">
        Developed and Maintained by <span className="text-indigo-500 hover:underline">IAATO</span>
      </div>
    </footer>
  );
};

export default Footer;
