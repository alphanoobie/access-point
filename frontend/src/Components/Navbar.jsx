import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="uppernav-div">
        <div className="logo-div">
          <h2 className="logo">
            <span>Access</span>Point
          </h2>
          {/* <p>India Pvt Lmt</p> */}
        </div>
        
          <div className="profile-div">
            <Link className="profile" to="/profile">Profile</Link>
            <Link className="contact" to="/profile">Contact Us</Link>
          </div>
     
      </div>

      <br />
      <hr />

      <nav className="navbar">
        <div className="menu-link">
          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/service">
              <li>Testimonials</li>
            </Link>
            <Link to="/contact">
              <li>Blogs</li>
            </Link>
            <Link to="/contact">
              <li>Careers</li>
            </Link>
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
