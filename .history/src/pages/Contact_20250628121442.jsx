// src/pages/Contact.jsx
import PageWrapper from '../components/PageWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen flex items-start sm:items-center justify-center font-bitcount
                      bg-dark dark:bg-light border-2 shadow-[-11px_1px_31px_-13px_#000000] p-4">  {/* Added p-4 for mobile spacing */}
        <div className="max-w-6xl w-full sm:px-0 lg:px-0 bg-light dark:bg-dark">
          <div className="shadow-[24px_20px_33px_0px_#000000] border-2 overflow-hidden rounded-lg"> {/* Added rounded-lg */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Added gap for spacing */}
              {/* Contact Information */}
              <section className="p-6 md:p-10 border-b md:border-b-0 md:border-r-2"> {/* Changed div to section */}
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white mb-4"> {/* Adjusted font size & added mb-4 */}
                  Let's connect
                </h1>
                <p className="mt-2 text-lg sm:text-xl font-medium text-gray-600 dark:text-white"> {/* Adjusted font size */}
                  Write me
                </p>

                <address className="mt-8 space-y-4 text-gray-600 dark:text-white not-italic"> {/* Changed div to address, added not-italic */}
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" /> {/* Added w-5 h-5 for icon size */}
                    <span className="ml-2 font-medium">Address, Street, City</span>  {/* Changed font-semibold to font-medium */}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                    <a href="tel:+123544648" className="ml-2 font-medium hover:text-indigo-500"> {/* Made phone number clickable */}
                      +123 5446 48
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                    <a href="mailto:email@email.com" className="ml-2 font-medium hover:text-indigo-500"> {/* Made email clickable */}
                      email@email.com
                    </a>
                  </div>
                </address>
              </section>

              {/* Contact Form */}
              <section className="p-6 flex flex-col justify-center bg-light dark:bg-dark"> {/* Changed div to section */}
                <form className="space-y-4"> {/* Added space-y-4 to the form itself */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 sr-only">Full Name</label>  {/* Added Label */}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      required  // Added required attribute
                      className="mt-1 py-2 px-3 block w-full rounded-md border border-gray-300 dark:border-gray-700
                                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold
                                 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 sr-only">Email</label>  {/* Added Label */}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required  // Added required attribute
                      className="mt-1 py-2 px-3 block w-full rounded-md border border-gray-300 dark:border-gray-700
                                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold
                                 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 sr-only">Telephone Number</label>  {/* Added Label */}
                    <input
                      type="tel"
                      id="phone"
                      name="tel"
                      placeholder="Telephone Number"
                      className="mt-1 py-2 px-3 block w-full rounded-md border border-gray-300 dark:border-gray-700
                                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold
                                 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-2 px-4 rounded-md bg-dark dark:bg-light
                                 text-text-light dark:text-text-dark font-semibold shadow-md
                                 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Contact;