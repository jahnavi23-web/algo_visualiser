import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
            <footer className="max-w-7xl mx-auto  text-white py-4">
          <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
            <p className="text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} HrushiSpace. All rights reserved.
            </p>
            <div className="flex items-center">
              <a
                href="mailto:hrushikesh.kothem@hrushispace.com"
                className="text-sm text-gray-400 hover:text-white mx-2"
              >
                <AiOutlineMail size={30}/>
              </a>
              <a
                href="https://www.linkedin.com/in/hrushispace/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white mx-2"
              >
                <FaLinkedin size={30}/>
              </a>
              <a
                href="https://www.instagram.com/hrushispace/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white mx-2"
              >
                <FaInstagram size={30}/>
              </a>
            </div>
          </div>
        </footer>
      );
    };

export default Footer;
