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
      <div className="mx-auto max-w-[1440px] lg:mx-auto scroll-smooth font-sora md:mx-auto ">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-232px)] bg-base-100">
          <Toaster position="top-right" reverseOrder={false} />
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
