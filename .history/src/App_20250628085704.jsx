// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  // 🌗 Load dark mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // 🌙 Toggle dark mode
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // 🌓 Sync dark mode with <html> and localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="bg-white text-black dark:bg-background-dark dark:text-white transition-colors duration-300">
        {/* 🧭 Navbar */}
        <header>
          <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </header>

        {/* 📄 Page Content */}
        <main className="container mx-auto p-4 font-atkinson">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* 🦶 Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
