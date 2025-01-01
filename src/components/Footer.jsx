import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center">
      <div className="max-w-6xl mt-4 pt-8 mx-auto">
        <nav className="mb-4">
          <a href="/about" className="text-white mx-4">About</a>
          <a href="/contact" className="text-white mx-4">Contact</a>
          <a href="/privacy" className="text-white mx-4">Privacy Policy</a>
        </nav>
        <p className="text-sm">&copy; 2025 UtopiaTour. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
