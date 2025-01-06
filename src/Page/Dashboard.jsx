import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaBars,
  FaChartBar,
  FaDollarSign,
  FaShoppingCart,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Helmet>
        <title>Green Sports | Dashboard</title>
      </Helmet>

      <div className='min-h-screen flex flex-col lg:flex-row bg-gray-100'>
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static top-0 left-0 w-64 bg-[#081621] text-white z-20 transform transition-transform duration-300`}
        >
          <div className='p-6'>
            <h2 className='text-2xl font-bold'>Green Sports</h2>
          </div>
          <nav className='mt-10'>
            <ul>
              <li className='mb-4'>
                <a
                  href='#'
                  className='flex items-center px-4 py-2 hover:bg-blue-700 transition'
                >
                  <FaChartBar className='mr-3' /> Dashboard Overview
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='flex items-center px-4 py-2 hover:bg-blue-700 transition'
                >
                  <FaShoppingCart className='mr-3' /> Orders
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='flex items-center px-4 py-2 hover:bg-blue-700 transition'
                >
                  <FaUsers className='mr-3' /> Customers
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='flex items-center px-4 py-2 hover:bg-blue-700 transition'
                >
                  <FaDollarSign className='mr-3' /> Revenue
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='#'
                  className='flex items-center px-4 py-2 hover:bg-blue-700 transition'
                >
                  <FaTrophy className='mr-3' /> Top Products
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <button
          onClick={toggleSidebar}
          className='lg:hidden fixed top-4 left-4 z-30 bg-blue-900 text-white p-2 rounded'
        >
          <FaBars size={20} />
        </button>

        {isSidebarOpen && (
          <div
            className='fixed inset-0 bg-black opacity-50 z-10 lg:hidden'
            onClick={toggleSidebar}
          ></div>
        )}

        <main className='flex-1 p-4 lg:p-6'>
          <header className='flex justify-between items-center mb-8 sticky top-0 bg-gray-100 z-10 p-4 shadow-md'>
            <h1 className='text-2xl lg:text-3xl font-bold text-gray-800'>
              Welcome Back, Admin!
            </h1>
            <button className='px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800'>
              Log Out
            </button>
          </header>

          {/* Metrics */}
          <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-lg font-semibold text-gray-700'>
                Total Orders
              </h3>
              <div className='flex items-center mt-4'>
                <FaShoppingCart className='text-blue-500 text-3xl' />
                <span className='text-2xl font-bold ml-4'>1,245</span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-lg font-semibold text-gray-700'>
                Total Customers
              </h3>
              <div className='flex items-center mt-4'>
                <FaUsers className='text-green-500 text-3xl' />
                <span className='text-2xl font-bold ml-4'>985</span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-lg font-semibold text-gray-700'>Revenue</h3>
              <div className='flex items-center mt-4'>
                <FaDollarSign className='text-yellow-500 text-3xl' />
                <span className='text-2xl font-bold ml-4'>$56,400</span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-lg font-semibold text-gray-700'>
                Top Products
              </h3>
              <div className='flex items-center mt-4'>
                <FaTrophy className='text-red-500 text-3xl' />
                <span className='text-2xl font-bold ml-4'>15</span>
              </div>
            </div>
          </section>

          <section className='mt-10'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Monthly Revenue Overview
              </h3>
              <div className='h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600'>
                Graph Placeholder
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
