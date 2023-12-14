import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="text-sm">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Phone: +1234567890</p>
            <p className="text-sm">Email: example@example.com</p>
            <p className="text-sm mt-4">Leave us a message:</p>
            {/* Your message input here */}
            <textarea className="w-full mt-2 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" rows="3" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700">Send</button>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-6 flex justify-between items-center">
          <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
          <p className="text-sm">Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
