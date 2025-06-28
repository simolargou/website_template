// src/pages/Contact.jsx
import PageWrapper from '../components/PageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen flex items-start sm:items-center justify-center font-bitcount 
                      bg-background-dark dark:bg-background-light border-2 shadow-[-11px_1px_31px_-13px_#000000]">
        <div className="max-w-6xl w-full sm:px-0 lg:px-0 bg-background-light dark:bg-background-dark">
          <div className="shadow-[24px_20px_33px_0px_#000000] border-2 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Kontaktinformationen */}
              <div className="p-10 md:p-20 border-b md:border-b-0 md:border-r-2">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800 dark:text-white">
                  Let's connect
                </h1>
                <p className="mt-2 text-lg sm:text-2xl font-medium text-white">
                  Write me
                </p>

                <div className="mt-8 space-y-4 text-gray-600 dark:text-white">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span className="ml-4 font-semibold">Address, Street, City</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="ml-4 font-semibold">+123 5446 48</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="ml-4 font-semibold">email@email.com</span>
                  </div>
                </div>
              </div>

              {/* Kontaktformular */}
              <form className="p-6 flex flex-col justify-center bg-background-light dark:bg-background-dark">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="mt-2 py-3 px-3 rounded-lg border border-gray-400 dark:border-gray-700 
                             bg-white dark:bg-background-dark text-gray-800 font-semibold 
                             focus:border-indigo-500 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-4 py-3 px-3 rounded-lg border border-gray-400 dark:border-gray-700 
                             bg-white dark:bg-background-dark text-gray-800 font-semibold 
                             focus:border-indigo-500 focus:outline-none"
                />
                <input
                  type="tel"
                  name="tel"
                  placeholder="Telephone Number"
                  className="mt-4 py-3 px-3 rounded-lg border border-gray-400 dark:border-gray-700 
                             bg-white dark:bg-background-dark text-gray-800 font-semibold 
                             focus:border-indigo-500 focus:outline-none"
                />

                <button
                  type="submit"
                  className="mt-6 py-3 px-6 rounded-lg bg-background-dark dark:bg-background-light 
                             text-text-dark dark:text-text-light text-center transition duration-300 hover:opacity-80"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Contact;
