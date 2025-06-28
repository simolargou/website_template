// src/pages/Home.jsx
import PageWrapper from '../components/PageWrapper';

function Home() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen flex items-center justify-center  font-bitcount 
                       dark:bg-background-light bg-background-dark 
                      text-text-light dark:text-text-dark">
        
        <div className="relative z-10 max-w-xl rounded-lg border-2 border-white p-10 m-4 
                        bg-background-light dark:bg-background-dark 
                        shadow-[24px_20px_33px_0px_#000000]">
          
          <h1 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Introduction.</span>
            <span className="absolute bottom-0 left-0 w-full h-2 
                             bg-background-dark dark:bg-background-light z-0"></span>
          </h1>

          <p className="text-lg mb-4">
            I am who I am. <em>Also</em>, I can be what I want to be.
          </p>

        </div>
        <div className="relative z-10 max-w-xl rounded-lg border-2 border-white p-10 
                        bg-background-light dark:bg-background-dark 
                        shadow-[24px_20px_33px_0px_#000000]">
          
          <h1 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Introduction.</span>
            <span className="absolute bottom-0 left-0 w-full h-2 
                             bg-background-dark dark:bg-background-light z-0"></span>
          </h1>

          <p className="text-lg mb-4">
            I am who I am. <em>Also</em>, I can be what I want to be.
          </p>

        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
