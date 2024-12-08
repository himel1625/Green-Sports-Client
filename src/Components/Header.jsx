import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="h-12 flex justify-between items-center  sm:px-8 md:0x-10 cursor-pointer backdrop-filter backdrop-blur-lg px-5 ">
        <div className="flex items-center gap-4 text-sm md:text-base font-bold text-gray-600">
          <FiMenu size={30} />
          <p className="hidden sm:block hover:text-green-400">Today Deals</p>
          <p className="hidden sm:block hover:text-green-400">
            Customer Service
          </p>
          <p className="hidden sm:block hover:text-green-400">Gift Card</p>
          <p className="hidden sm:block hover:text-green-400">Mystery Box</p>
          <NavLink
            to="/BlogPage"
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-green-600' : 'hover:text-green-600'
              }`
            }
          >
            <p className="hidden sm:block hover:text-green-400">Blog-Page</p>
          </NavLink>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full sm:w-[250px] md:w-[300px] h-[40px] rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
