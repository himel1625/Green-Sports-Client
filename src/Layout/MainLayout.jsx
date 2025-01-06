import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../UI/Footer';
import Navbar from '../UI/Navbar';

const MainLayout = () => {
  return (
    <>
      <Helmet>
        <title>Green Sports | Home</title>
      </Helmet>
      <div className='bg-[#F2F4F8] mx-auto scroll-smooth'>
        <Navbar></Navbar>
        <div className='mx-auto container lg:mx-auto scroll-smooth font-sora md:mx-auto  '>
          <div className='min-h-[calc(100vh-232px)] '>
            <Toaster position='top-right' reverseOrder={false} />
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
