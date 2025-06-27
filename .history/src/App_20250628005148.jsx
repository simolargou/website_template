import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Social from './pages/Social';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <Nav />
        </header>
        <main className="container mx-auto py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;