import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import Lottie from 'lottie-react';
import errorAnimation from '../Animation/Error.json'; // Renamed to 'errorAnimation'

const ErrorPage = () => {
  // Renamed component to 'ErrorPage'
  return (
    <>
      <Helmet>
        <title>Green Sports | Page Not Found</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center  from-gray-100 to-gray-200">
        <Lottie animationData={errorAnimation} />
        <NavLink to="/">
          <button className="inline-block px-8 py-3 text-white font-medium bg-green-400 hover:bg-green-700 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            Back to Home
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage; // Updated export
