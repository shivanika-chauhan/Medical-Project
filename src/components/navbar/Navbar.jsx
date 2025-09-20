import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUser } from "react-icons/fa"; // User icon for SignIn
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false); // Close menu on mobile after link click
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
      {/* Top: Logo + Right Menu */}
      <div className="flex justify-between items-center px-4 md:px-10 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.jpg"
            alt="logo"
            className="h-10 w-auto md:h-12 cursor-pointer"
          />
          <span className="hidden md:inline-block text-2xl font-bold text-blue-600 cursor-pointer">
            Care<span className="text-green-500">Wave</span>
          </span>
        </Link>

        {/* Right: SignIn + Cart + Menu */}
        <ul className="flex items-center gap-4 text-blue-600 font-semibold">
          {/* SignIn */}
          <li>
            <Link
              to="/signin"
              onClick={handleLinkClick}
              className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition md:px-4"
            >
              <FaUser className="text-lg md:mr-1" />
              <span className="hidden md:inline">Sign In</span>
            </Link>
          </li>

          {/* Cart */}
          <li className="relative">
            <Link
              to="/cart"
              onClick={handleLinkClick}
              className="flex items-center justify-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition md:px-4"
            >
              <MdOutlineShoppingCart className="text-lg md:mr-1" />
              <span className="hidden md:inline">Cart</span>
            </Link>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartItems.length}
              </span>
            )}
          </li>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </ul>
      </div>

      {/* Desktop Categories */}
      <div className="hidden md:block bg-gray-50">
        <ul className="flex flex-wrap justify-between font-semibold text-gray-600 px-6 md:px-20 py-2 text-sm border-t border-b">
          <li><Link to="/medicines" onClick={handleLinkClick} className="hover:text-blue-600">Medicines</Link></li>
          <li><Link to="/personal" onClick={handleLinkClick} className="hover:text-blue-600">Personal Care</Link></li>
          <li><Link to="/healthconditions" onClick={handleLinkClick} className="hover:text-blue-600">Health Conditions</Link></li>
          <li><Link to="/vitaminssuppliments" onClick={handleLinkClick} className="hover:text-blue-600">Vitamins & Supplements</Link></li>
          <li><Link to="/diabetesecare" onClick={handleLinkClick} className="hover:text-blue-600">Diabetes Care</Link></li>
          <li><Link to="/healthcaredevices" onClick={handleLinkClick} className="hover:text-blue-600">Health Care Devices</Link></li>
          <li><Link to="/homeopathicmedicine" onClick={handleLinkClick} className="hover:text-blue-600">Homeopathic Medicine</Link></li>
          <li><Link to="/healthguide" onClick={handleLinkClick} className="hover:text-blue-600">Health Guide</Link></li>
        </ul>
      </div>

      {/* Mobile Categories */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-inner px-6 py-4 space-y-3 border-t">
          <div><Link to="/medicines" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-blue-600">Medicines</Link></div>
          <div><Link to="/personal" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-blue-600">Personal Care</Link></div>
          <div><Link to="/healthconditions" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-blue-600">Health Conditions</Link></div>
          <div><Link to="/vitaminssuppliments" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-blue-600">Vitamins & Supplements</Link></div>
          <div><Link to="/diabetesecare" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-blue-600">Diabetes Care</Link></div>
          <div><Link to="/healthcaredevices" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-blue-600">Health Care Devices</Link></div>
          <div><Link to="/homeopathicmedicine" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-blue-600">Homeopathic Medicine</Link></div>
          <div><Link to="/healthguide" onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-blue-600">Health Guide</Link></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
