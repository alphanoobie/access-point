import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import logoimage from "../../assets/img/logo.png"

const Navbar = () => {
  return (
    <>
      <div className={styles.uppernavdiv}>
        <div className={styles.logodiv}>
          <img src={logoimage} className={styles.logo} alt=""/>
        </div>

        <div className={styles.leftside}>
          {/* <div className={styles.profilediv}>
            <AccountCircleIcon className={styles.profileicon} />
            <Link className={styles.profile} to="/profile">
              Profile
            </Link>
          </div>
          <div className={styles.contactdiv}>
            <PhoneIcon className={styles.phoneicon} />
            <Link className={styles.contact} to="/profile">
              Contact Us
            </Link>
          </div> */}


          <div className={styles.logindiv}>
            <AccountCircleIcon className={styles.loginicon} />
            <Link className={styles.login} to="/login">
              Login
            </Link>
          </div>
          <div className={styles.signupdiv}>
            <PhoneIcon className={styles.signupicon} />
            <Link className={styles.signup} to="/signup">
              Sign Up
            </Link>
          </div>
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
