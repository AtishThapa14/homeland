import React from 'react';

const LoginModal = ({ handleLoginSubmit, setShowLoginModal }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg min-w-screen'>
        <h2 className='text-2xl font-semibold mb-4'>Log In</h2>
        <form onSubmit={handleLoginSubmit}>
          <input type='text' placeholder='Username' className='mb-4 px-3 py-2 border rounded-lg' />
          <input type='password' placeholder='Password' className='mb-4 px-3 py-2 border rounded-lg' />
          <button type='submit' className='bg-orange-700 hover:bg-violet-700 text-white px-4 py-2 rounded-lg'>
            Submit
          </button>
        </form>
        <button className='text-sm text-gray-600 mt-4' onClick={() => setShowLoginModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
