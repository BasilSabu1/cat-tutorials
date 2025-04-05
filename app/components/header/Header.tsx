"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and brand */}
        <div className="flex items-center">
  <Image
    src="/headerlogo.png" // replace with your actual image path
    alt="Edunoia Logo"
    width={120} // adjust width as needed
    height={56} // adjust height as needed
    className="h-10 w-auto sm:h-12 md:h-14 object-contain"
  />
</div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-orange-500 transition-colors">
            Home
          </Link>
          <Link href="/past-paper" className="text-white hover:text-orange-500 transition-colors">
            Past paper
          </Link>
          <Link href="/know-your-college" className="text-white hover:text-orange-500 transition-colors">
            Know your college
          </Link>
          <Link href="/materials" className="text-white hover:text-orange-500 transition-colors">
            Materials
          </Link>
          <Link href="/gdpi-sessions" className="text-white hover:text-orange-500 transition-colors">
            GDPI Sessions
          </Link>
          <Link href="/updates" className="text-white hover:text-orange-500 transition-colors">
            Updates
          </Link>
          <Link href="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
            Contact us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 z-50 shadow-lg">
            <div className="flex flex-col p-4 space-y-3">
              <Link href="/" className="text-white hover:text-orange-500 transition-colors py-2">
                Home
              </Link>
              <Link href="/past-paper" className="text-white hover:text-orange-500 transition-colors py-2">
                Past paper
              </Link>
              <Link href="/know-your-college" className="text-white hover:text-orange-500 transition-colors py-2">
                Know your college
              </Link>
              <Link href="/materials" className="text-white hover:text-orange-500 transition-colors py-2">
                Materials
              </Link>
              <Link href="/gdpi-sessions" className="text-white hover:text-orange-500 transition-colors py-2">
                GDPI Sessions
              </Link>
              <Link href="/updates" className="text-white hover:text-orange-500 transition-colors py-2">
                Updates
              </Link>
              <Link href="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-center">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;