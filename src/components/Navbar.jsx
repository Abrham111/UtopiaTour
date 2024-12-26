import React, { useState } from 'react';

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
          <a href="#home">Home</a>
          {dropdown === 'home' && (
            <ul className="dropdown">
              <li className="dropdown-item"><a href="#home-section1">Section 1</a></li>
              <li className="dropdown-item"><a href="#home-section2">Section 2</a></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
          <a href="#blog">Blog</a>
          {dropdown === 'blog' && (
            <ul className="dropdown">
              <li className="dropdown-item"><a href="#blog-section1">Section 1</a></li>
              <li className="dropdown-item"><a href="#blog-section2">Section 2</a></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => handleMouseEnter('sites')} onMouseLeave={handleMouseLeave}>
          <a href="#sites">Sites</a>
          {dropdown === 'sites' && (
            <ul className="dropdown">
              <li className="dropdown-item"><a href="#sites-section1">Section 1</a></li>
              <li className="dropdown-item"><a href="#sites-section2">Section 2</a></li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
          <a href="#about">About Us</a>
          {dropdown === 'about' && (
            <ul className="dropdown">
              <li className="dropdown-item"><a href="#about-section1">Section 1</a></li>
              <li className="dropdown-item"><a href="#about-section2">Section 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;