import React from "react";
import styles from "./Home.module.css";
import image1 from "../../assets/img/homepic.jpg";

const Home = () => {
  return (
    <div className={styles.herocontainer}>
      <div className={styles.wrapper}></div>
      <h1 className={styles.heading}>
        <span className={styles.need}>Need</span> Service
      </h1>
      <h4 className={styles.subheading}>WE CAN HELP YOU !</h4>
      <p className={styles.subpara}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        minus ratione voluptatibus.
      </p>
      <img className={styles.image1} src={image1} alt="" />
    </div>
  );
};

export default Home;
