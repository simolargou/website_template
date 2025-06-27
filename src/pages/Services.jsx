import React from 'react';

function Services() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p>Modern, responsive websites tailored to your needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Design & Branding</h3>
          <p>Logos, color schemes, and branding materials.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
          <p>Boost your visibility on search engines.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;