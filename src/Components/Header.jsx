import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <div>
      <div className="h-12 flex justify-between items-center mx-4 sm:mx-8 md:mx-10 cursor-pointer backdrop-filter backdrop-blur-lg ">
        <div className="flex items-center gap-4 text-sm md:text-base">
          <FiMenu size={30} />
          <p className="hidden sm:block">Today Deals</p>
          <p className="hidden sm:block">Customer Service</p>
          <p className="hidden sm:block">Gift Card</p>
          <p className="hidden sm:block">Mystery box</p>
          <p className="hidden sm:block">Child item</p>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full sm:w-[250px] md:w-[300px] h-[40px] rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Header;
