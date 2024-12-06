import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { handleGoogleBUtton, handleLogin, setUser, user } =
    useContext(AuthContext);
  const Location = useLocation();
  const Navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    if (password.length < 6) {
      toast.error('❌Password must contain at least 6 character ');
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('❌Password must in one uppercase letter ');
    }
    if (!/[a-z]/.test(password)) {
      toast.error('❌Password must in one lowercase letter ');
    }

    handleLogin(email, password)
      .then(res => {
        const user = res.user;
        setUser(user);
        Navigate(Location?.state ? Location.state : '/');
        e.target.reset();
        if (user) {
          toast.success('Login Successful ');
        }
      })
      .catch(error => {
        const errorCode = error.code;
        toast.error(`${errorCode}`);
      });
  };
  return (
    <>
      <Helmet>
        <title>Green Sports | Login</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center  ">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-8 shadow-xl rounded-lg  border border-gray-300 ">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={user && user?.email}
                required
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div
                className="absolute inset-y-0 right-3 top-6 flex items-center cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 bg-green-300 text-black font-bold rounded-md hover:bg-green-700 transition duration-200"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button className="w-full py-2 bg-gradient-to-r from-green-500 to-[#34d399] text-white rounded-md hover:from-green-600 hover:to-[#10b981] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">
              <div
                onClick={handleGoogleBUtton}
                className="flex items-center justify-center gap-6"
              >
                <FaGoogle /> Sign in with Google
              </div>
            </button>
          </div>

          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600 flex items-center justify-center">
              Don't have an account?
              <NavLink to="/register" className="text-red-700 font-bold ml-1">
                Register here
              </NavLink>
            </div>
            <NavLink
              to="/Forgot"
              className="text-red-700 font-bold mx-2 cursor-pointer"
            >
              Forgot password?
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
