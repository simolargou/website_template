import React from 'react';

function Home() {
  return (
    <section className="relative min-h-screen bg-[#1e1c1f] text-white flex items-center justify-center p-6">
      {/* Dots pattern */}
      <div className="absolute top-10 left-10 z-0 grid grid-cols-6 gap-3">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white/30" />
        ))}
      </div>

      {/* Purple circles */}
      <div className="absolute bottom-10 right-10 z-0">
        <div className="relative w-52 h-52 bg-purple-800 rounded-full">
          <div className="absolute top-4 left-4 w-52 h-52 border-2 border-white rounded-full"></div>
        </div>
      </div>

      {/* Card */}
      <div className="relative z-10 bg-[#1e1c1f] border-2 border-white p-10 shadow-xl max-w-xl">
        <h1 className="text-4xl font-bold mb-4 relative inline-block">
          <span className="relative z-10">Introduction.</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-400 z-0"></span>
        </h1>

        <p className="text-lg mb-4">
          My blog is where I think out loud. Expect <em>mainly</em> front-end development, with a sprinkling of self care and mental health.
        </p>
        <p className="text-lg">
          I'm trying to be less precious about writing, so I’ve started a{' '}
          <a
            href="#"
            className="font-bold underline decoration-purple-400 underline-offset-4"
          >
            snippets and notes
          </a>{' '}
          section over here, for smaller posts.
        </p>
      </div>
    </section>
  );
}

export default Home;