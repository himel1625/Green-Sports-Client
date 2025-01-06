import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    LogOut();
    toast.success('Logout successful');
  };

  return (
    <div className='sticky top-0 z-50 bg-[#081621] w-full'>
      <div className='mx-auto flex items-center justify-between h-20 md:px-8'>
        {/* Logo */}
        <div className='lg:text-4xl text-2xl font-bold mx-4 flex select-none'>
          <NavLink to='/'>
            <span className='text-[#c9241a]'>Green</span>-
            <span className='text-[#0176b3]'>Sports</span>
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden mx-4'>
          {isMenuOpen ? (
            <IoCloseSharp
              size={30}
              className='cursor-pointer text-white'
              onClick={toggleMenu}
              aria-label='Close Menu'
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className='cursor-pointer text-white'
              onClick={toggleMenu}
              aria-label='Open Menu'
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'translate-y-0 ' : 'translate-y-full hidden'
          } md:hidden absolute top-16 right-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-40`}
        >
          <div className='flex flex-col items-center gap-6 p-4 uppercase'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `font-medium ${
                  isActive ? 'text-[#c9241a]' : 'text-[#0176b3]'
                } hover:text-customYellow`
              }
            >
              HOME
            </NavLink>

            <NavLink
              to='/equipment'
              className={({ isActive }) =>
                `font-medium ${
                  isActive ? 'text-[#c9241a]' : 'text-[#0176b3]'
                } hover:text-customYellow`
              }
            >
              All Equipment
            </NavLink>

            {user && (
              <>
                <NavLink
                  to='/addEquipment'
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive ? 'text-[#c9241a]' : 'text-[#0176b3]'
                    } hover:text-customYellow`
                  }
                >
                  Add Equipment
                </NavLink>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive ? 'text-[#c9241a]' : 'text-[#0176b3]'
                    } hover:text-customYellow`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to='/brandIdentity'
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive ? 'text-[#c9241a]' : 'text-[#0176b3]'
                    } hover:text-customYellow`
                  }
                >
                  Brand Identity
                </NavLink>
                <NavLink
                  to='/myProfile'
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive ? 'text-[#c9241a]' : 'text-[#0176b3]'
                    } hover:text-customYellow`
                  }
                >
                  Account
                </NavLink>
              </>
            )}

            <div>
              <div className='font-bold text-[#c9241a]'>
                {user && user.email ? (
                  <button onClick={handleLogout}>LogOut</button>
                ) : (
                  <NavLink to='/Login'>
                    <button className='text-green-600'>Login</button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='md:flex hidden items-center gap-10 uppercase'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `font-bold ${
                isActive ? 'text-[#c9241a]' : 'text-white'
              } hover:text-customYellow`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to='/equipment'
            className={({ isActive }) =>
              `font-medium ${
                isActive ? 'text-[#c9241a]' : 'text-white'
              } hover:text-customYellow`
            }
          >
            All Equipment
          </NavLink>

          {user && (
            <>
              <NavLink
                to='/addEquipment'
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? 'text-[#c9241a]' : 'text-white'
                  } hover:text-customYellow`
                }
              >
                Add Equipment
              </NavLink>
              <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? 'text-[#c9241a]' : 'text-white'
                  } hover:text-customYellow`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to='/brandIdentity'
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? 'text-[#c9241a]' : 'text-white'
                  } hover:text-customYellow`
                }
              >
                Brand Identity
              </NavLink>
              <NavLink
                to='/myProfile'
                className={({ isActive }) =>
                  `font-medium ${
                    isActive ? 'text-[#c9241a]' : 'text-white'
                  } hover:text-customYellow`
                }
              >
                Account
              </NavLink>
            </>
          )}

          <div>
            <div className='font-bold text-[#c9241a]'>
              {user && user.email ? (
                <button onClick={handleLogout}>LogOut</button>
              ) : (
                <NavLink to='/login'>
                  <button className='text-green-600'>Login</button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
