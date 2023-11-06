import React from "react";
import "./Header.css";
import logoThumb from "/public/assets/images/logo.png";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="main-nav">
          <div className="link">
            <a href="" className="nav-logo">
              <img src={logoThumb} className="logo-img" alt="" srcSet="" />
            </a>
          </div>

          <ul className="nav-item">
            <li className="nav-list">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-list">
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-list">
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
