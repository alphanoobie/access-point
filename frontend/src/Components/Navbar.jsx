import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.uppernavdiv}>
        <div className={styles.logodiv}>
          <h2 className={styles.logo}>
            <span>Access</span>Point
          </h2>
          {/* <p>India Pvt Lmt</p> */}
        </div>

        <div className={styles.profilediv}>
          <Link className={styles.profile} to="/profile">
            Profile
          </Link>
          <Link className={styles.contact} to="/profile">
            Contact Us
          </Link>
        </div>
      </div>

      <br />
      <hr />

      <nav className={styles.navbar}>
        <div className={styles.menulink}>
          <ul className={styles.navlinks}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/testimonial">
              <li>Testimonials</li>
            </Link>
            <Link to="/contact">
              <li>Blogs</li>
            </Link>
            <Link to="/contact">
              <li>Careers</li>
            </Link>
            <Link to="/service">
              <li>Services</li>
            </Link>
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
