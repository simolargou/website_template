import React from 'react';

function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <form className="bg-white p-8 rounded-lg shadow space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="w-full border border-gray-300 rounded p-2" rows="5" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}

export default Contact;