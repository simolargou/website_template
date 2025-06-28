import React from 'react';

function Home() {
  return (
    <section className="relative min-h-screen bg-primary dark:bg-primary-dark text-white flex items-center justify-center p-6 font-bitcount">
     
  

      {/* Card */}
      <div className="relative z-10  text-primary-dark dark:bg-primary bg-primary-dark border-2 border-white p-10 shadow-xl max-w-xl">
        <h1 className="text-4xl font-bold mb-4 relative inline-block">
          <span className="relative z-10 ">Introduction.</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-primary-dark z-0"></span>
        </h1>

        <p className="text-lg mb-4">
          My blog is where I think out loud. Expect <em>mainly</em> front-end development, with a sprinkling of self care and mental health.
        </p>
        
      </div>
    </section>
  );
}

export default Home;