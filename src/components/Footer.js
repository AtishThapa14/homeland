import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto flex justify-between items-center border-t-2 border-orange-500 pt-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-orange-700">New Baneswar, Kathmandu, Nepal</p>
          <p className="text-orange-700">Phone: 9860605116 </p>
          <p className="text-orange-700">Email: thapasinghatish123@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <a href="#" className="text-orange-700 hover:text-violet-700 transition duration-300">Home</a>
          <a href="#" className="text-orange-700 hover:text-violet-700 transition duration-300">Properties</a>
          <a href="#" className="text-orange-700 hover:text-violet-700 transition duration-300">About Us</a>
          <a href="#" className="text-orange-700 hover:text-violet-700 transition duration-300">Contact Us</a>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100040786204751" className="text-orange-700 hover:text-violet-700 transition duration-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/elonmusk" className="text-orange-700 hover:text-violet-700 transition duration-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/sadish_cha/" className="text-orange-700 hover:text-violet-700 transition duration-300 text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
