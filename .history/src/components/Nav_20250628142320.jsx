import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // If using React Router

export default function Nav({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:text-text-dark text-text-light font-bitcount p-4 text-xl dark:bg-dark bg-light sticky top-0 z-50 font-forum"> {/* Added padding and sticky top */}
      <div className="max-w-7xl mx-auto flex justify-between items-center"> {/* Removed explicit h-16, let content determine height */}
        {/* Logo */}
        <Link to="/" className="text-lg rounded-full border-b-2 p-2 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"> {/* Used Link, added focus state */}
          Logo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center"> {/* Added items-center for vertical alignment */}
          <Link to="/" className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Home</Link> {/* Used Link, added focus state */}
          <Link to="/contact" className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Kontakt</Link> {/* Used Link, added focus state */}

          {/* 🌙 Dark Mode Button (Desktop) */}
          <button
            onClick={toggleDarkMode}
            className="px-2 py-1 rounded text-yellow-400 dark:text-white text-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"  // Improved styling and focus state
            aria-label={darkMode ? "Enable light mode" : "Enable dark mode"}
          >
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}  // Use a dedicated handler
            className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"  // Removed group
            aria-label="Toggle menu"
            aria-expanded={isOpen}  // Add aria-expanded for accessibility
          >
            <span
              className={`block absolute h-0.5 w-6 bg-current rounded transition-transform duration-300 ease-in-out
                ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}
              `}
              aria-hidden="true" // Hide decorative elements from screen readers
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current rounded transition-opacity duration-300 ease-in-out
                ${isOpen ? 'opacity-0' : 'opacity-100'}
              `}
              aria-hidden="true"  // Hide decorative elements from screen readers
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current rounded transition-transform duration-300 ease-in-out
                ${isOpen ? '-rotate-45 -translate-y-0' : 'translate-y-2'}
              `}
              aria-hidden="true" // Hide decorative elements from screen readers
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pt-2 space-y-2 overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}
        `}
        aria-hidden={!isOpen} // Add aria-hidden for accessibility
      >
        <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={handleToggleMenu}>Home</Link>  {/* Used Link, added focus, close on click */}
        <Link to="/contact" className="block px-3 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={handleToggleMenu}>Kontakt</Link>  {/* Used Link, added focus, close on click */}

        {/* 🌙 Dark Mode Button (Mobile) */}
        <button
          
          className="w-full px-4 py-2 rounded text-sm hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"  // Modified styling for consistency
          aria-label={darkMode ? "Enable light mode" : "Enable dark mode"}
          onClick={() => {
              handleToggleMenu();
              toggleDarkMode();
          }}
        >
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="mr-2" />  {/* Add a little spacing */}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}