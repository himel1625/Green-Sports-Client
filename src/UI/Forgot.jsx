import React from 'react';
import { NavLink } from 'react-router-dom';

const Forgot = () => {
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    
    if (email) {
      toast.success('Successfully  forget your password');
    }
    window.open('http://mail.google.com', '_blank');
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg  shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-800 text-center mb-6">
            Forgot Password
          </h2>
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                // defaultValue={user && user?.email}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Reset Password
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            Remember your password?
            <NavLink to="/Login">
              <p className="text-red-600 font-bold hover:underline">Login</p>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
