import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className="flex justify-center p-3 bg-gray-100 shadow-md">
      <ul className="flex flex-row justify-center items-center gap-24">
        <li onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>
          <a className='flex flex-row font-semibold text-2xl' href="#home">Home</a>
        </li>
        <li onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
          <a className='flex flex-row font-semibold text-2xl' href="#blog">Blog{dropdown ? <RiArrowDropUpLine className='h-8 w-8' /> : <RiArrowDropDownLine className='h-8 w-8' />}</a>
          {dropdown === 'blog' && (
            <ul className="dropdown">
              <li className="dropdown-item hover:underline"><a href="#blog-section1">Section 1</a></li>
              <li className="dropdown-item hover:underline"><a href="#blog-section2">Section 2</a></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => handleMouseEnter('sites')} onMouseLeave={handleMouseLeave}>
          <a className='flex flex-row font-semibold text-2xl' href="#sites">Sites{dropdown ? <RiArrowDropUpLine className='h-8 w-8' /> : <RiArrowDropDownLine className='h-8 w-8' />}</a>
          {dropdown === 'sites' && (
            <ul className="dropdown">
              <li className="dropdown-item hover:underline"><a href="#sites-section1">Section 1</a></li>
              <li className="dropdown-item hover:underline"><a href="#sites-section2">Section 2</a></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
          <a className='flex flex-row font-semibold text-2xl' href="#about">About Us{dropdown ? <RiArrowDropUpLine className='h-8 w-8' /> : <RiArrowDropDownLine className='h-8 w-8' />}</a>
          {dropdown === 'about' && (
            <ul className="dropdown">
              <li className="dropdown-item hover:underline"><a href="#about-section1">Section 1</a></li>
              <li className="dropdown-item hover:underline"><a href="#about-section2">Section 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <a className='flex flex-row font-semibold text-2xl' href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;