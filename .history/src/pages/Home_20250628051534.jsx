import React from 'react';

function Home() {
  return (
    <div style={{
    backgroundColor: '#ffffff',
    backgroundImage: `
      radial-gradient(circle at center center, #000000, #ffffff),
      repeating-radial-gradient(circle at center center, #000000, #000000 4px, transparent 8px, transparent 4px)
    `,
    backgroundBlendMode: 'multiply',
  }} >
    
      <h2 className="text-3xl font-semibold mb-6 text-center">Welcome to My Business</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        
      </div>
    </div>
  );
}

export default Home;