import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Green Sports | Page Not Found</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="text-center max-w-md p-10 rounded-xl shadow-2xl bg-white animate-fadeIn">
          <h1 className="text-7xl font-extrabold text-purple-700 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Oops! It looks like the page you're trying to reach doesn't exist or
            has been moved.
          </p>
          <NavLink to="/">
            <button className="inline-block px-8 py-3 text-white font-medium bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              Back to Home
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
