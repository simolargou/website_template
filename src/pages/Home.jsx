// src/pages/Home.jsx
import PageWrapper from '../components/PageWrapper';

function Home() {
    return (
        <PageWrapper>
            <div className="relative min-h-screen flex flex-col xl:flex-row items-center justify-center  font-forum
                           dark:bg-light bg-dark
                          text-text-light dark:text-text-dark p-4"> {/* Added padding for responsiveness */}

                <section className="relative z-10 max-w-xl rounded-lg border-2 border-white p-10 m-4
                                bg-light dark:bg-dark
                                shadow-[24px_20px_33px_0px_#000000]">

                    <h1 className="text-4xl font-bold mb-4 relative inline-block">
                        <span className="relative z-10">Introduction.</span>
                        <span className="absolute bottom-0 left-0 w-full h-2
                                         bg-dark dark:bg-light z-0"></span>
                    </h1>

                    <p className="text-lg mb-4">
                        I am who I am. <em>Also</em>, I can be what I want to be.
                    </p>

                </section>

                {/* Use more descriptive class names for the other sections */}
                <section className="relative z-10 max-w-xl rounded-lg border-2 border-white p-8 m-2
                                bg-light dark:bg-dark
                                shadow-[24px_20px_33px_0px_#000000]">
                    {/* Content for this section */}
                    <h2>Section Title</h2>
                    <p>Some text here...</p>
                </section>

                <section className="relative z-10 max-w-xl rounded-lg border-2 border-white p-4 m-2
                                bg-light dark:bg-dark
                                shadow-[24px_20px_33px_0px_#000000]">
                    {/* Content for this section */}
                    <h2>Section Title</h2>
                    <p>Some text here...</p>
                </section>

                <section className="relative z-10 max-w-xl rounded-lg border-2 border-white p-8 m-2
                                bg-light dark:bg-dark
                                shadow-[24px_20px_33px_0px_#000000]">
                    {/* Content for this section */}
                    <h2>Section Title</h2>
                    <p>Some text here...</p>
                </section>
            </div>
        </PageWrapper>
    );
}

export default Home;