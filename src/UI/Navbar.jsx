import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <>
      <div className="lg:space-x-4 flex flex-col lg:flex lg:flex-row">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Equipment"
          className={({ isActive }) =>
            `font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`
          }
        >
          All-Equipment
        </NavLink>
      </div>
    </>
  );

  return (
    <>
      <div className="navbar h-20 sticky top-0 z-10 backdrop-filter backdrop-blur-lg px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <NavLink to="/">
            <h1 className="text-3xl font-bold text-green-400 drop-shadow-[0_2px_4px_rgba(56,161,105,0.75)]">
              Green Sports
            </h1>
          </NavLink>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <div className="relative lg:block hidden">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-[200px] h-[40px] rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
              alt="User Avatar"
            />
            <NavLink
              to="/Login"
              className="font-bold text-green-600 hover:text-green-800"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
