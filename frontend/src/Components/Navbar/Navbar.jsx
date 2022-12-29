import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import logoimage from "../../assets/img/logo.png";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  

  const logout = () => {
    localStorage.clear();
    toast("Logged Out");
    navigate('/')
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  };

  return (
    <>
      <div className={styles.uppernavdiv}>
        <div className={styles.logodiv}>
          <img src={logoimage} className={styles.logo} alt="" />
        </div>

        <div className={styles.leftside}>
          {props.logined ? (
            <div className={styles.profilediv}>
              <AccountCircleIcon className={styles.profileicon} />
              <Link className={styles.profile} to="/profile">
                Profile
              </Link>
            </div>
          ) : (
            <div className={styles.logindiv}>
              <AccountCircleIcon className={styles.loginicon} />
              <Link className={styles.login} to="/login">
                Login
              </Link>
            </div>
          )}

          {!props.logined && (
            <div className={styles.signupdiv}>
              <SignLanguageIcon className={styles.signupicon} />
              <Link className={styles.signup} to="/signup">
                Sign up
              </Link>
            </div>
          )}
          <div className={styles.contactdiv}>
            <PhoneIcon className={styles.phoneicon} />
            <Link className={styles.contact} to="/contact">
              Contact Us
            </Link>
          </div>
          {props.logined && (
            <div className={styles.contactdiv}>
              <LogoutIcon className={styles.phoneicon} />
              <Link className={styles.contact} to="/" onClick={logout}>
                Logout
              </Link>
            </div>
          )}
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
