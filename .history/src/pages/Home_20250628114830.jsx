// src/pages/Home.jsx
import PageWrapper from '../components/PageWrapper';

function Home() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen flex xl:flex-row sm:flex-col items-center justify-center  font-bitcount 
                       black:bg-light bg-black 
                      text-text-light black:text-text-black">
        
        <div className="relative z-10 max-w-xl rounded-lg border-2 border-white p-10 m-4 
                        bg-light black:bg-black 
                        shadow-[24px_20px_33px_0px_#000000]">
          
          <h1 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Introduction.</span>
            <span className="absolute bottom-0 left-0 w-full h-2 
                             bg-black black:bg-light z-0"></span>
          </h1>

          <p className="text-lg mb-4">
            I am who I am. <em>Also</em>, I can be what I want to be.
          </p>

        </div>
          <div className="relative z-10 max-w-xl rounded-lg border-2 border-white p-8 m-2 
                          bg-light black:bg-black 
                          shadow-[24px_20px_33px_0px_#000000]">
              
        </div>
         <div className="relative z-10 max-w-xl rounded-lg border-2 border-white p-4 
                          bg-light black:bg-black 
                          shadow-[24px_20px_33px_0px_#000000]">
              
        </div>
         <div className="relative z-10 max-w-xl rounded-lg border-2 border-white p-8 m-2
                          bg-light black:bg-black 
                          shadow-[24px_20px_33px_0px_#000000]">
              
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
