import React from "react";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div
        className="logo"
        onClick={() => window.location.reload()} // reload to home/menu page
      >
        🍴 TasteHub
      </div>

      {/* Center: Nav Links */}
      <div className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Menu</a>
      </div>

      {/* Right: Login / Logout */}
      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <span className="profile-icon">👤</span>
          </>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
