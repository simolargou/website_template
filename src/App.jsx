import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Social from './pages/Social';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">My Business</h1>
            <ul className="flex gap-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/social" className="hover:underline">Social</Link></li>
            </ul>
          </nav>
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