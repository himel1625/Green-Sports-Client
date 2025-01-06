import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import RegisterImg from '../Image/Sign up-amico.png';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { handleRegister, setUser, ManageProfile, handleGoogleBUtton, user } =
    useContext(AuthContext);
  const Location = useLocation();
  const Navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const hanldleG = () => {
    handleGoogleBUtton();
    Navigate(Location?.state ? Location.state : '/');
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const firstName = form.get('firstName');
    const lastName = form.get('lastName');
    const name = firstName + lastName;
    const photoUrl = form.get('photoUrl');
    const email = form.get('email');
    const password = form.get('password');

    if (password.length < 6) {
      toast.error('❌Password must contain at least 6 character ');
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('❌Password must contain at least one uppercase letter ');
    }
    if (!/[a-z]/.test(password)) {
      toast.error('❌Password must contain at least one lowercase letter ');
    }

    handleRegister(email, password)
      .then(res => {
        const user = res.user;
        setUser(user);
        Navigate(Location?.state ? Location.state : '/');
        e.target.reset();
        if (user) {
          toast.success('Register successful ');
        }
        ManageProfile(name, photoUrl, email);
      })
      .catch(error => {
        const errorCode = error.code;
        toast.error(`${errorCode}`);
      });

    if (user) {
      setTimeout(() => {
        toast.success('You have created an account, please login');
      }, 4000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Green Sports | Home</title>
      </Helmet>

      <div className='min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100'>
        <div className='w-full md:w-1/2 lg:w-1/3 p-6 md:p-8'>
          <img
            src={RegisterImg}
            alt='Register'
            className='w-full h-auto rounded-lg'
          />
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 p-6 md:p-8 shadow-lg rounded-lg bg-white'>
          <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>
            Create Account
          </h2>
          <form onSubmit={handleRegisterSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700'
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  required
                  placeholder='Enter your first name'
                  className='mt-1 block w-full px-4 py-2 border border-gray-300 '
                />
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  placeholder='Enter your last name'
                  className='mt-1 block w-full px-4 py-2 border border-gray-300 '
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='photoUrl'
                className='block text-sm font-medium text-gray-700'
              >
                Photo URL
              </label>
              <input
                type='url'
                id='photoUrl'
                name='photoUrl'
                required
                placeholder='Enter your photo URL'
                className='mt-1 block w-full px-4 py-2 border border-gray-300 '
              />
            </div>

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
                required
                placeholder='Enter your email address'
                className='mt-1 block w-full px-4 py-2 border border-gray-300 '
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
                placeholder='Enter a password'
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
                className='w-full py-2 text-white bg-Color rounded-md '
              >
                Create Account
              </button>
            </div>
          </form>

          <div className='mt-6 text-center'>
            <button
              onClick={hanldleG}
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
              Already have an account?{' '}
              <NavLink
                to='/login'
                className='text-red-700 font-bold hover:text-red-800'
              >
                Login here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
