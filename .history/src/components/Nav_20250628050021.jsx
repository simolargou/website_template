import React, { useState } from 'react';

export default function Nav({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dark:text-text-light text-text-dark font-sintony p-0 text-xl dark:bg-primary bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg font-bold">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden  md:flex space-x-6  ">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Kontakt</a>
          <a href="/social" className="hover:text-gray-400">Social</a>

          {/* 🌙 Dark Mode Button (Desktop) */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-1 py-1 rounded bg-primary text-primary-dark dark:bg-primary-dark dark:text-white text-sm"
          >
            {darkMode ? '🌙 ' : '☀️'}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 mx-auto w-fit">
          <a href="/" className="block px-3 py-2 rounded hover:bg-gray-600">Home</a>
          <a href="/services" className="block px-6 py-2 rounded hover:bg-gray-600">Services</a>
          <a href="/contact" className="block px-3 py-2 rounded hover:bg-gray-600">Kontakt</a>
          <a href="/social" className="block px-8 py-2 rounded hover:bg-gray-600">Social</a>

          {/* 🌙 Dark Mode Button (Mobile) */}
          <div
            onClick={toggleDarkMode}
            className={`w-full h-full text-left rounded px-4 py-4 transition duration-300 cursur-pointer
              ${darkMode 
                ? 'bg-primary-dark rounded-full text-white shadow-[0_2px_10px_#FFD700]'  // yellow glow
                : 'bg-gray-200 text-black shadow-[0_0_10px_#000000]'      // black glow
              }`}
          >
            {darkMode ? 'Dark' : 'Light'}
          </div>
        </div>
      )}
    </nav>
  );
}
