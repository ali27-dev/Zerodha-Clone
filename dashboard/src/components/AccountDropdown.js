import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./css/AccountDropdown.css";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="account-dropdown" ref={dropdownRef}>
      <button className="account-btn" onClick={toggleDropdown}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user avatar"
          className="account-avatar"
        />
        <span className="account-name">Account</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▾</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            {" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              Login
            </Link>
          </li>
          <li className="dropdown-item">
            <Link style={{ textDecoration: "none" }} to="/signup">
              Signup
            </Link>
          </li>
          <li className="dropdown-item logout">Logout</li>
        </ul>
      )}
    </div>
  );
};

export default AccountDropdown;
