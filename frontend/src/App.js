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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
