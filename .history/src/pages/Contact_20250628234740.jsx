// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({  // State for form data
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate email sending (replace with your actual logic)
        const emailSentSuccessfully = false; // Replace with your actual logic!

        if (!emailSentSuccessfully) {
            setIsModalOpen(true);  // Open the modal
        } else {
            // Handle successful email sending (e.g., show a success message)
            alert('Email sent successfully!'); // Replace with a nicer UI element
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);  // Close the modal
    };

    return (
        <div className="relative min-h-screen flex items-start sm:items-center justify-center font-forum bg-lightest dark:bg-light border-2 shadow-[-11px_1px_31px_-13px_#000000] p-4">
            <div className="max-w-6xl w-full sm:px-0 lg:px-0 bg-lightest dark:bg-dark">
                <div className="shadow-[24px_20px_33px_0px_#000000] border-2 overflow-hidden rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  place-items-center">
                        {/* Contact Information */}
                        <section className="p-6 md:p-10 border-b md:border-b-0 md:border-r-2 ">
                            {/* Contact Information Content */}
                            <h2 className='text-2xl font-bold justify-center' >Contact Information</h2>  {/* Replace with your actual content */}
                            <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
                            <span className="ml-2 font-medium">Address, Street, City</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                            <a href="tel:+123544648" className="ml-2 font-medium hover:text-indigo-500">
                                +123 5446 48
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                            <a href="mailto:email@email.com" className="ml-2 font-medium hover:text-indigo-500">
                                email@email.com
                            </a>
                        </div>
                        </section>
                        

                        {/* Contact Form */}
                        <section className="p-6 flex flex-col justify-center bg-light dark:bg-dark">
                            <form className="space-y-4" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 sr-only">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 py-2 px-3 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-light text-gray-800 dark:text-gray-200 font-semibold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 sr-only">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 py-2 px-3 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-light  text-gray-800 dark:text-gray-200 font-semibold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 sr-only">Telephone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Telephone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 py-2 px-3 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-light  text-gray-800 dark:text-gray-200 font-semibold shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full py-2 px-4 rounded-md bg-dark dark:bg-light text-text-light dark:text-text-dark font-semibold shadow-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-light dark:bg-dark rounded-lg p-8 shadow-xl border-2 border-white">
                        <h2 className="text-2xl font-bold text-black dark:text-light mb-4">Email Not Sent</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Sorry, there was a problem sending your email. Please try again later.
                        </p>
                        <button
                            className="bg-light hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;