
import PageWrapper from '../components/PageWrapper';
function Home() {
  return (
    <PageWrapper>
    <div className="relative min-h-screen bg-primary dark:bg-background-light bg-background-dark text-text-light dark:text-text-dark flex items-center justify-center p-6 font-bitcount">
     
      <div className="relative z-10 rounded-lg shadow-[24px_20px_33px_0px_#000000]  dark:bg-background-dark bg-background-light border-2 border-white p-10 shadow-xl max-w-xl">
        <h1 className="text-4xl font-bold mb-4 relative inline-block">
          <span className="relative z-10 ">Introduction.</span>
          <span className="absolute bottom-0 left-0 w-full  h-2 dark:bg-background-dark bg-background-light z-0"></span>
        </h1>

        <p className="text-lg mb-4">
          i am who i am  <em> Also</em> i can be what i want to be
        </p>
        
      </div>
    </div>
    </PageWrapper>
  );
}

export default Home;