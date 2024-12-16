// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import React Router Link

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility

  const items = (
    <>
      <Link
        to="/"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </Link>
      <Link
        to="/jobs"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        Jobs
      </Link>
      <Link
        to="/employers"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        Employers
      </Link>
      <Link
        to="/about"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        About
      </Link>
      <Link
        to="/register"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center bg-green-600"
      >
        Register
      </Link>
    </>
  );

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="text-white text-2xl font-bold">JobPortal</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">{items}</div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1">{items}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
