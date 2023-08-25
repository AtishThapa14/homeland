import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./Login/LoginModal"; // Import the LoginModal component
import SignupModal from "./SignUp/SignupModal"; // Import the SignupModal component
import Logo from "../assets/img/logo.svg";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("Login form submitted.");
    setShowLoginModal(false);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    console.log("Signup form submitted.");
    setShowSignupModal(false);
  };
  const signup = () => {
    setShowLoginModal(true);
    setShowLoginModal(false);
  };
  const login = () => {
    setShowLoginModal(false);
    setShowLoginModal(true);
  };

  return (
    <header className="py-6 mb-12 border-b border-orange-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/* navigation */}
        <nav className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/about">
            About Us
          </Link>
          <Link className="hover:text-violet-900 transition" to="/contact">
            Contact
          </Link>
          <a
            href="/login"
            className="hover:text-violet-900 transition"
            onClick={signup}
          >
            Log in
          </a>
          <a
            href="/signup"
            className=" bg-orange-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition hover:text-violet-900 transition"
            onClick={login}
          >
            Sign up
          </a>
        </nav>
      </div>
      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal
          handleLoginSubmit={handleLoginSubmit}
          setShowLoginModal={setShowLoginModal}
        />
      )}
      {/* Signup Modal */}
      {showSignupModal && (
        <SignupModal
          handleSignupSubmit={handleSignupSubmit}
          setShowSignupModal={setShowSignupModal}
        />
      )}
    </header>
  );
};

export default Header;
