import React from 'react';

function Home() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Welcome to My Business</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img src="https://via.placeholder.com/300" className="rounded-lg shadow" alt="Business 1" />
        <img src="https://via.placeholder.com/300" className="rounded-lg shadow" alt="Business 2" />
        <img src="https://via.placeholder.com/300" className="rounded-lg shadow" alt="Business 3" />
      </div>
    </div>
  );
}

export default Home;