"use client"
import {  NavHashLink } from 'react-router-hash-link';


const NavbarDemo = () => {
  return (
    <nav className="bg-black p-4  w-full top-0 z-50 shadow-lg">
      <div className="flex justify-center space-x-8">
        <NavHashLink to="#about" className="text-white hover:text-gray-300 transition duration-300">
          About
        </NavHashLink>
        <NavHashLink to="#projects" className="text-white hover:text-gray-300 transition duration-300">Projects
        </NavHashLink>
        <NavHashLink to="#technologies" className="text-white hover:text-gray-300 transition duration-300">Experience
        </NavHashLink>
        <NavHashLink to="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact
        </NavHashLink>
      </div>
    </nav>
  );
};

export default NavbarDemo;