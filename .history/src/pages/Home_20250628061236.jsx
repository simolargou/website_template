import React from 'react';

function Home() {
  return (
    <section className="relative min-h-screen bg-primary dark:bg-primary-dark text-white flex items-center justify-center p-6">
     
      

      {/* Purple circles */}
      <div className="absolute bottom-10 right-10 z-0">
        <div className="relative w-52 h-52 bg-primary-dark dark:bg-primary rounded-full">
          <div className="absolute top-4 left-4 w-52 h-52 border-2 border-white rounded-full"></div>
        </div>
      </div>

      {/* Card */}
      <div className="relative z-10 dark:bg-primary bg-primary-dark border-2 border-white p-10 shadow-xl max-w-xl">
        <h1 className="text-4xl font-bold mb-4 relative inline-block">
          <span className="relative z-10">Introduction.</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-400 z-0"></span>
        </h1>

        <p className="text-lg mb-4">
          My blog is where I think out loud. Expect <em>mainly</em> front-end development, with a sprinkling of self care and mental health.
        </p>
        
      </div>
    </section>
  );
}

export default Home;