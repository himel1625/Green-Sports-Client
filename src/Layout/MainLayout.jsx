import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Footer from '../UI/Footer';

const MainLayout = () => {
  return (
    <>
      <Helmet>
        <title>Green Sports | Home</title>
      </Helmet>
      <div className="mx-auto max-w-[1440px] lg:mx-auto scroll-smooth font-sora">
        <div className="min-h-[calc(100vh-232px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
