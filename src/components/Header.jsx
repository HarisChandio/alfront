import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-blue-950 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="text-lg flex items-center justify-between mx-auto max-w-screen-xl">
        <Link to="/">
            <h1 id="logo" className="flex items-center text-white text-lg font-semibold leading-3 tracking-wider">
              SZABIST
            </h1>
            <span id="logo-dets" className="text-blue-300 relative left-1.5" >ALUMNI</span>
          </Link>
          <div className="lg:hidden">
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="text-white px-4 py-2 focus:outline-none">
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
          <div className={`${isMenuOpen ? "block" : "hidden"} lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
              <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-blue-400"
                                            : "text-white"
                                        }
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="event"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-blue-400"
                                            : "text-white"
                                        }
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="volunteer"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-blue-400"
                                            : "text-white"
                                        }
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Volunteer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="donate"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-blue-400"
                                            : "text-white"
                                        }
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 `
                  }
                >
                  Donate
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-blue-400"
                                            : "text-white"
                                        }
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 `
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-blue-400"
                                            : "text-white"
                                        }
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 `
                  }
                >
                  Contact
                </NavLink>
              </li>
              {/* Add similar changes for other menu items */}
            </ul>
          </div>
          <div className="hidden lg:flex items-center lg:order-2">
            <Link
              to="/signin"
              className="text-white hover:bg-blue-900 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none lg:mr-4"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
