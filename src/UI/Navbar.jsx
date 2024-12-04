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
          to="/"
          className={({ isActive }) =>
            `font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`
          }
        ></NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold ${isActive ? 'text-green-600' : 'hover:text-warning'}`
          }
        >
          Home
        </NavLink>
      </div>
    </>
  );

  return (
    <>
      <div className="navbar h-20 bg-green-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
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
          <h1 className=" text-2xl font-bold">Green Sports</h1>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="mx-4">
            <div>
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={
                  // user?.photoURL ||
                  'https://cdn-icons-png.flaticon.com/512/8847/8847419.png'
                }
                alt="User Avatar"
              />
            </div>
          </div>
          <div>
            <NavLink to="/Login">Login</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
