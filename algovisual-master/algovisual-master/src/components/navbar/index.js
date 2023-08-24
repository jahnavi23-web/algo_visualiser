import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between">
        <div className="flex sm:items-center ml-3  sm:h-16 flex-col w-[100%] sm:flex-row justify-between">
          <div className="flex items-center h-16 ml-[-15px]">
            {/* Logo */}
            <a href="/" className="text-white font-mono font-semibold text-2xl">
           <img src="./icon.png"  width={200}/>
            </a>
          </div>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } sm:flex flex-col sm:justify-center sm:align-middle sm:m-auto  sm:space-y-0 sm:flex-row `}
          >
            {/* Navigation Links */}
            <Link
              to="/"
              className="text-text font-sans hover:bg-gray-700 transition delay-150 sm:px-2 py-2 mx-2 rounded-md text-lg"
            >
              Searching
            </Link>
            <Link
              to="/sorting"
              className="text-text font-sans hover:bg-gray-700 transition delay-150 sm:px-2 py-2 mx-2 rounded-md text-lg"
            >
              Sorting
            </Link>
            <Link
              to="/paths"
              className="text-text font-sans hover:bg-gray-700 transition delay-150 sm:px-2 py-2 mx-2 rounded-md text-lg"
            >
              Path Searching
            </Link>
            <Link
              to="/more"
              className="text-text font-sans hover:bg-gray-700 transition delay-150 sm:px-2 py-2 mx-2 rounded-md text-lg"
            >
              More
            </Link>
          </div>
          <div>
          </div>
          {/* Add more navigation links as needed */}
          <div>
            <button className={`${
              isOpen ? "flex" : "hidden"
            } sm:flex flex-col mt-2 sm:mt-0 bg-primary h-9 justify-center rounded-md px-3 text-text font-mono`}>
              check the code
            </button>
          </div>
        </div>
        {/* Hamburger Menu */}
        <button
              className="sm:hidden h-16 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
             {isOpen && (<AiOutlineClose size={32} className="text-primary"/>)}
             {!isOpen && (<AiOutlineMenu size={32} className="text-primary"/>)}
            </button>
      </div>
    </nav>
  );
};

export default Navbar;
