import React from 'react';

function Social() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
      <ul className="space-y-4">
        <li><a href="#" className="text-blue-600 hover:underline">Facebook</a></li>
        <li><a href="#" className="text-blue-400 hover:underline">Twitter</a></li>
        <li><a href="#" className="text-pink-600 hover:underline">Instagram</a></li>
        <li><a href="#" className="text-black hover:underline">LinkedIn</a></li>
      </ul>
    </div>
  );
}

export default Social;