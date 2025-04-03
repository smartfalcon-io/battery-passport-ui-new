import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

const Header: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleLoginClick = () => {
    setShowSignIn((prev) => !prev);
  };

  const handleCloseSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <header className="custom-header">
      <div className="logo-container">
        <h1>BATTERY PASSPORT</h1>
      </div>

      <nav className="nav-icons">
        <button className="icon-button" onClick={handleLoginClick}>
          <FaUser />
        </button>

        {showSignIn && (
          <Link to="/signin" className="signin-box" onClick={handleCloseSignIn}>
            <span className="signin-text">Sign in</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
