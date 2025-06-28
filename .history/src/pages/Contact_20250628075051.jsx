import PageWrapper from '../components/PageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return (
    <PageWrapper>
    <div className="border-20 relative flex font-bitcount bg-background-light dark:bg-background-dark items-top justify-center min-h-screen  sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
        <div className="border-4 mt-2 overflow-hidden shadow-[24px_20px_33px_0px_#000000]">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="p-20 mr-0    border-r-2 ">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Lets connect
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-white jus mt-2">
                write me 
              </p>

              <div className="flex items-center mt-8 text-gray-600 dark:text-white">
                 <FontAwesomeIcon icon={faLocationDot} />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Adress, Street, State, Postal Code
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <FontAwesomeIcon icon={faPhone} />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +123544648
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Email@email.com
                </div>
              </div>
            </div>

            <form className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text" // Changed type="name" to type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-background-dark border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-background-dark border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2  py-3 px-3 rounded-lg bg-white dark:bg-background-dark border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div
                type="submit"
                className="md:w-32 cursor-pointer dark:text-text-light text-text-dark bg-background-dark dark:bg-background-light  py-3 px-6 rounded-lg mt-3 hover:bg-red-500 transition ease-in-out duration-300"
              >
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}

export default Contact;