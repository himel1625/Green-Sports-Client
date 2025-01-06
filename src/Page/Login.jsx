import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../Image/Tablet login-bro.png';
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

  const handelG = () => {
    handleGoogleBUtton();
    Navigate(Location?.state ? Location.state : '/');
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    if (password.length < 6) {
      toast.error('❌Password must contain at least 6 characters');
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('❌Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      toast.error('❌Password must contain at least one lowercase letter');
    }

    handleLogin(email, password)
      .then(res => {
        const user = res.user;
        setUser(user);
        Navigate(Location?.state ? Location.state : '/');
        e.target.reset();
        if (user) {
          toast.success('Login Successful');
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

      <div className='min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100'>
        <div className='w-full md:w-1/2 lg:w-1/3 p-6 md:p-8'>
          <img
            src={loginImg}
            alt='Login'
            className='w-full h-auto rounded-lg'
          />
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 p-6 md:p-8 shadow-lg rounded-lg bg-white'>
          <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>
            Login
          </h2>
          <form onSubmit={handleLoginSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                defaultValue={user && user?.email}
                required
                placeholder='Enter your email'
                className='mt-1 block w-full px-4 py-2 border '
              />
            </div>

            <div className='relative'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                required
                placeholder='Enter your password'
                className='mt-1 block w-full px-4 py-2 border border-gray-300 '
              />
              <div
                className='absolute inset-y-0 right-3 top-6 flex items-center cursor-pointer'
                onClick={togglePassword}
              >
                {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='w-full py-2 text-white bg-Color rounded-md  t'
              >
                Login
              </button>
            </div>
          </form>

          <div className='mt-6 text-center'>
            <button
              onClick={handelG}
              type='button'
              className='w-full py-2 text-white bg-Color rounded-md '
            >
              <div className='flex items-center justify-center gap-6'>
                <FaGoogle /> Sign in with Google
              </div>
            </button>
          </div>

          <div className='mt-4 text-center text-sm text-gray-600'>
            <p>
              Don't have an account?{' '}
              <NavLink
                to='/register'
                className='text-red-700 font-bold hover:text-red-800'
              >
                Register here
              </NavLink>
            </p>
            <NavLink
              to='/Forgot'
              className='text-red-700 font-bold mx-2 cursor-pointer'
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
