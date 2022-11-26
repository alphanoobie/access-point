import React from "react";
import "./home.css";
import image1 from "../assets/img/homepic.jpg";

const Home = () => {
  return (
    <div className="hero-container">
      <div className="wrapper"></div>
      <h1 className="heading">
        <span className="need">Need</span> Service
      </h1>
      <h4 className="sub-heading">WE CAN HELP YOU !</h4>
      <p className="sub-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        minus ratione voluptatibus.
      </p>
      <img className="image1" src={image1} alt="" />
    </div>
  );
};

export default Home;
