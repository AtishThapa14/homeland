import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.svg';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginSubmit = (event) => {
    // Add code to handle login form submission and authentication here
    event.preventDefault();
    // Example: You can use the state or send the form data to your backend for authentication
    console.log('Login form submitted.');
    setShowLoginModal(false); // Hide the modal after form submission (you may choose to redirect to a new page here)
  };

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {/* navigation */}
        <nav className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/about'>
            About Us
          </Link>
          <Link className='hover:text-violet-900 transition' to='/contact'>
            Contact
          </Link>
          <a
            href='#'
            className='hover:text-violet-900 transition'
            onClick={handleLoginClick}
          >
            Log in
          </a>
          <Link
            className='bg-orange-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/signup'
          >
            Sign up
          </Link>
        </nav>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-4'>Log In</h2>
            <form onSubmit={handleLoginSubmit}>
              {/* Add your login form fields here (e.g., username, password) */}
              <input type='text' placeholder='Username' className='mb-4 px-3 py-2 border rounded-lg' />
              <input type='password' placeholder='Password' className='mb-4 px-3 py-2 border rounded-lg' />
              <button type='submit' className='bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg'>
                Submit
              </button>
            </form>
            <button className='text-sm text-gray-600 mt-4' onClick={() => setShowLoginModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
