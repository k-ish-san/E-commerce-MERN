import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import {FiPhoneCall} from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-black border-t-4 border-t-indigo-600 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-200 mb-4 border-t-2 border-t-indigo-600 pt-3">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offer.
          </p>
          <p className="font-medium text-sm text-gray-400 mb-6">
            Sign up and get 10% off on your first order.
          </p>
          {/* Newsletter form */}
          <form className="flex" action="">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-3 w-full font-mono text-sm border-t border-l-2
             border-b-2 border-b-indigo-600 rounded-l-md focus:outline-none focus:ring-2 focus-ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-gray-800  border-b-4 border-b-indigo-600 text-white px-6 py-3 text-sm round-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop Links */}
        <div>
          <h3 className="text-lg  text-gray-200 mb-4 border-t-2 border-t-indigo-600 pt-3">Shop</h3>
          <ul className="space-y-2 text-gray-400 ">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* Support links */}
        <div>
          <h3 className="text-lg text-gray-200 mb-4 border-t-2 border-t-indigo-600 pt-3">Support</h3>
          <ul className="space-y-2 text-gray-400 ">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/*  Follow us */}
        <div>
            <h3 className="text-lg text-gray-200 mb-4 border-t-2 border-t-indigo-600 pt-4">Follow Us </h3>
            <div className="flex text-gray-400 items-center space-x-4 mb-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" >
                <TbBrandMeta className="h-5 w-5"/></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" >
                <IoLogoInstagram className="h-5 w-5"/></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" >
                <RiTwitterXLine className="h-4 w-4"/></a>
            </div>
            <p className="text-gray-200">Call Us</p>
            <p className="text-gray-400">
                <FiPhoneCall className="inline-block mr-2 text-gray-400" />
                0123-456-789
            </p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0  border-t-2 border-t-indigo-600  pt-6"></div>
    <p className="text-gray-200 text-sm tracking-tighter text-center">
    © 2025
    </p>
    </footer>
  );
};

export default Footer;
