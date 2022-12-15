import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonials/Testimonial";
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Sign'
import Profile from './Components/Profile/Profile'

import Admin from "./Components/Admin/Admin";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn"); //sneha code to see if the user is logged in or no

  return (
    <div>
      <ToastContainer position="top-center" />
      <Navbar logined={loggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service logined={loggedIn} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
