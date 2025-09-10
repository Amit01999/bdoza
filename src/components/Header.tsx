import React, { useState } from 'react';
import { Search, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import headerlogo from '@/assets/headerlogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-300 relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Desktop: Left spacer */}
            <div className="flex-1 hidden md:block" />

            {/* Center - Logo */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="flex items-center mb-2 justify-center">
                <img
                  src={headerlogo}
                  alt="B Doza & Company - Customs Clearance Services"
                  className="h-16 w-auto md:h-20"
                />
              </div>
              <p className="text-gray-600 text-sm font-medium">
                Excellence in Customs Clearance
              </p>
            </div>

            {/* Desktop: Right - Search Bar */}
            <div className="flex-1 hidden md:flex justify-end ">
              <div className="flex bg-white items-center px-4 py-2 border-2 border-gray-400 rounded-sm shadow-sm w-64">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 ml-3 text-gray-700 focus:outline-none placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-4">
          {/* Desktop: Left spacer */}
          <div className="flex-1 hidden md:block" />

          {/* Menu Icon - center in mobile, normal in desktop */}
          <button
            onClick={toggleMenu}
            className="focus:outline-none flex justify-center w-full md:w-auto"
          >
            <svg
              className="w-8 h-8 text-gray-800 hover:text-blue-600 cursor-pointer transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop: Social Media Icons on Right */}
          <div className="flex-1 hidden md:flex justify-end ">
            <div className="flex gap-4 text-gray-800 mr-8 md:mr-36">
              <MapPin className="w-6 h-6 cursor-pointer hover:text-gray-600" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-600" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-600" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Full Width Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-gray-100 border-t border-gray-300 shadow-md z-30">
          <nav>
            <ul className="divide-y divide-gray-300">
              {[
                'Home',
                'About',
                'Services',
                'Client Testimonials',
                'Contact',
                'Blogs',
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="block px-6 py-4 text-gray-700 hover:bg-gray-200 transition-colors text-center"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
