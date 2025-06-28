import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Social from './pages/Social';
import Nav from './components/Nav';


function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme === 'true'; 
  });


  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };


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
        <main className="container  p-2 ">
        
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
