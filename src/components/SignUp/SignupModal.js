import React from "react";
import { FaGoogle, FaApple, FaPhone } from "react-icons/fa";

const SignupModal = ({ handleSignupSubmit, setShowSignupModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg min-w-screen">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <p className="text-gray-600 mb-2">Choose a signup method:</p>
        <button
          className="bg-orange-700 hover:bg-violet-700 text-white px-4 py-2 rounded-lg mb-2 flex items-center gap-2"
          onClick={handleSignupSubmit}
        >
          <FaGoogle /> Sign up with Gmail
        </button>
        <button
          className="bg-orange-700 hover:bg-violet-700 text-white px-4 py-2 rounded-lg mb-2 flex items-center gap-2"
          onClick={handleSignupSubmit}
        >
          <FaApple /> Sign up with Apple ID
        </button>
        <button
          className="bg-orange-700 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={handleSignupSubmit}
        >
          <FaPhone /> Sign up with Phone Number
        </button>
        <button
          className="text-sm text-gray-600 mt-4"
          onClick={() => setShowSignupModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
