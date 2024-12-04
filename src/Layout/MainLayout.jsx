import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Helmet>
        <title>Sports Equipment Store | Page Not Found</title>
      </Helmet>
      <div className="mx-auto max-w-[1440px] lg:mx-auto scroll-smooth font-sora">
        <div className="min-h-[calc(100vh-232px)]">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
