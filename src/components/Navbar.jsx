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
    <nav className="flex justify-center p-1 lg:p-3 md:p-2 sm:p-1 bg-gray-100 shadow-md">
      <ul className="flex flex-row justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-24">
        <li onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>
          <a className='flex flex-row font-semibold text-xs sm:text-sm md:text-lg lg:text-2xl' href="/">Home</a>
        </li>
        <li onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
          <a className='flex flex-row font-semibold text-xs sm:text-sm md:text-lg lg:text-2xl' href="/blog">Blog{dropdown ? <RiArrowDropUpLine className='h-4 sm:h-5 md:h-6 lg:h-8 w-4 sm:w-5 md:w-6 lg:w-8' /> : <RiArrowDropDownLine className='h-4 sm:h-5 md:h-6 lg:h-8 w-4 sm:w-5 md:w-6 lg:w-8' />}</a>
          {dropdown === 'blog' && (
            <ul className="dropdown">
              <li className="hover:underline"><a href="/blog">Top 5 sites</a></li>
              <li className="hover:underline"><a href="/blog">Historic places</a></li>
              <li className="hover:underline"><a href="/blog">National Parks</a></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => handleMouseEnter('sites')} onMouseLeave={handleMouseLeave}>
          <a className='flex flex-row font-semibold text-xs sm:text-sm md:text-lg lg:text-2xl' href="/placestovisit">Sites{dropdown ? <RiArrowDropUpLine className='h-4 sm:h-5 md:h-6 lg:h-8 w-4 sm:w-5 md:w-6 lg:w-8' /> : <RiArrowDropDownLine className='h-4 sm:h-5 md:h-6 lg:h-8 w-4 sm:w-5 md:w-6 lg:w-8' />}</a>
          {dropdown === 'sites' && (
            <ul className="dropdown">
              <li className="hover:underline"><a href="/placestovisit">Cities</a></li>
              <li className="hover:underline"><a href="/placestovisit">Historical places</a></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
          <a className='flex flex-row font-semibold text-xs sm:text-sm md:text-lg lg:text-2xl' href="/about">About Us{dropdown ? <RiArrowDropUpLine className='h-4 sm:h-5 md:h-6 lg:h-8 w-4 sm:w-5 md:w-6 lg:w-8' /> : <RiArrowDropDownLine className='h-4 sm:h-5 md:h-6 lg:h-8 w-4 sm:w-5 md:w-6 lg:w-8' />}</a>
          {dropdown === 'about' && (
            <ul className="dropdown">
              <li className="hover:underline"><a href="/about">Our services</a></li>
              <li className="hover:underline"><a href="/about">Our History</a></li>
            </ul>
          )}
        </li>
        <li>
          <a className='flex flex-row font-semibold text-xs sm:text-sm md:text-lg lg:text-2xl' href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;