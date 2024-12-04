import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold mb-2 text-purple-400">
            Green Sports
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Leading provider of quality export equipment globally. We deliver
            excellence and ensure customer satisfaction.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold mb-3 text-purple-400">
            Contact Us
          </h3>
          <p className="text-gray-300">
            <span className="font-semibold">Email: </span>
            Green-Sports@gmail.com
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Phone:</span> +880 123 000 696
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Address:</span> Q64R+8Q3, Keerani
            Para Rd, Rangpur, Bangladesh
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3 text-purple-400">
            Feedback
          </h3>
          <div className="space-y-4">
            <textarea
              className="w-full p-4 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
              rows="4"
              placeholder="Share your valuable feedback..."
            />
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 mt-10 pt-5">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Green Sports . All rights reserved.
          | (Himel)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
