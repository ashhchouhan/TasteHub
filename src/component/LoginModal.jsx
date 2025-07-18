import React from "react";
import "./LoginModal.css";

const LoginModal = ({ onClose, onLogin }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Please Login</h2>
        <p>You must log in to continue.</p>
        <button className="login-btn" onClick={onLogin}>Login</button>
        <button className="close-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;
