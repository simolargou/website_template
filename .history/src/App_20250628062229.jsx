import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Social from './pages/Social';
import Nav from './components/Nav';


function App() {
  // ✅ Dark Mode Initialisierung mit localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme === 'true'; // true or false as string
  });

  // 🌓 Toggle Funktion
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // ✅ Effekt zum Anwenden des Dark Modes + Speichern in localStorage
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
      <div className=" bg-white text-black  dark:text-green-950 transition-colors duration-300">
       
        <header >
          <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </header>
        <main className="container mx-auto p-4 font-atkinson">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
