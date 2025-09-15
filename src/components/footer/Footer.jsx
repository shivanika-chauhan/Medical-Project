// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">About HealthyCare</h3>
            <p className="text-sm leading-relaxed text-gray-100">
              HealthyCare is committed to providing top-quality medical care and
              health solutions with compassion and innovation. Your health, our
              responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Doctors</a></li>
              <li><a href="#" className="hover:underline">Health Conditions</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Editorial Policy</a></li>
              <li><a href="#" className="hover:underline">Returns & Cancellations</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Contact & Follow Us</h3>
            <p className="text-sm mb-1"><strong>Address:</strong> 456 Wellness Street, Health City, India</p>
            <p className="text-sm mb-1"><strong>Email:</strong> support@healthycare.com</p>
            <p className="text-sm mb-3"><strong>Phone:</strong> +91-9876543210</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-3 justify-start sm:justify-start">
              <a href="#" className="hover:text-gray-200"><FaFacebookF size={18} /></a>
              <a href="#" className="hover:text-gray-200"><FaTwitter size={18} /></a>
              <a href="#" className="hover:text-gray-200"><FaInstagram size={18} /></a>
              <a href="#" className="hover:text-gray-200"><FaLinkedinIn size={18} /></a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 border-t border-green-700 pt-6">
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-center lg:text-left">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg text-green-700 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-green-700 pt-4 text-center text-xs sm:text-sm text-gray-200">
          &copy; {new Date().getFullYear()} HealthyCare. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
