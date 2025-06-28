import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Nav({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dark:text-text-dark text-text-light font-bitcount p-0 text-xl dark:bg-background-dark bg-background-light">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-lg rounded-full border-b-2 p-2">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/contact" className="hover:text-gray-400">Kontakt</a>

          {/* 🌙 Dark Mode Button (Desktop) */}
          <button
            onClick={toggleDarkMode}
            className="ml-0 px-2 py-0 rounded bg-yellow-500 text-yellow-800 dark:bg-black dark:text-white text-sm"
          >
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center group"
            aria-label="Toggle menu"
          >
            <span
              className={`block absolute h-0.5 w-6 bg-current rounded transition-transform duration-300 ease-in-out
                ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}
              `}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current rounded transition-opacity duration-300 ease-in-out
                ${isOpen ? 'opacity-0' : 'opacity-100'}
              `}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current rounded transition-transform duration-300 ease-in-out
                ${isOpen ? '-rotate-45 -translate-y-0' : 'translate-y-2'}
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={` md:hidden px-4 pt-2 space-y-2 mx-auto w-fit overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}
        `}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <a href="/" className="block px-3 py-2 rounded hover:bg-gray-600">Home</a>
        <a href="/contact" className="block px-3 py-2 rounded hover:bg-gray-600">Kontakt</a>

        {/* 🌙 Dark Mode Button (Mobile) */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-2 py-2 rounded bg-primary text-primary-dark dark:bg-primary-dark dark:text-white text-sm"
        >
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
}
