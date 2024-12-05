import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import animation from '../Animation/animation.json';
import Header from '../Components/Header';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const Navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [isDarkMode]);

  const toggleMode = () => {
    const newMode = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newMode);
    document.documentElement.setAttribute('data-theme', newMode);
  };

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
        {user && (
          <NavLink
            to="/MyProfile"
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-green-600' : 'hover:text-green-600'
              }`
            }
          >
            MyProfile
          </NavLink>
        )}
        <NavLink
          to="/Equipment"
          className={({ isActive }) =>
            `font-bold ${isActive ? 'text-green-600' : 'hover:text-green-600'}`
          }
        >
          All-Equi:
        </NavLink>

        {user && (
          <NavLink
            to="/MyEquipmentList"
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-green-600' : 'hover:text-green-600'
              }`
            }
          >
            my-Equi-List
          </NavLink>
        )}
        {user && (
          <NavLink
            to="/AddEquipment"
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-green-600' : 'hover:text-green-600'
              }`
            }
          >
            Add-Equi:
          </NavLink>
        )}
        <div
          className="flex items-center cursor-pointer lg:hidden"
          onClick={toggleMode}
        >
          {isDarkMode ? (
            <MdOutlineWbSunny size={30} />
          ) : (
            <MdOutlineDarkMode size={30} />
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="sticky top-0 z-10">
      <div className="navbar h-20  backdrop-filter backdrop-blur-xl px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-16 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-green-400 flex items-center justify-center">
              <div className="w-10 h-10 mx-2 hidden lg:block">
                <Lottie animationData={animation} />
              </div>
              <NavLink to="/">
                <span className="text-green-900">G</span>reen-
                <span className="text-green-900">S</span>ports
              </NavLink>
            </h1>
          </div>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <div className="nav bar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 mx-2">{links}</ul>
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleMode}
            >
              {isDarkMode ? (
                <MdOutlineWbSunny size={30} />
              ) : (
                <MdOutlineDarkMode size={30} />
              )}
            </div>
          </div>
          <div>
            {user?.photoURL ? (
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={user.photoURL}
                alt="User Avatar"
              />
            ) : (
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
                alt="Default Avatar"
              />
            )}
          </div>

          <div className="font-bold text-left text-green-400 mx-2">
            {user && user.email ? (
              <NavLink to="/">
                <button onClick={LogOut}>LogOut</button>
              </NavLink>
            ) : (
              <button onClick={() => Navigate('/Login')}>Login</button>
            )}
          </div>
        </div>
      </div>
      <hr />
      <Header></Header>
    </div>
  );
};

export default Navbar;
