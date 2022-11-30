import React from "react";
import pic1 from "../../assets/img/pic1.jpg"
import pic2 from "../../assets/img/homepic.jpg"
import pic3 from "../../assets/img/pic1.jpg"

import styles from "./Service.module.css";

const Service = () => {
  return (
    <>
      <div className={styles.selfcontainer}>
        <div class={styles.card}>
          <div class={styles.imgbox}>
            <img src={pic1} alt="" />
            <h2>Maintianence</h2>
          </div>

          <div class={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus vitae fugit enim repudiandae
            </p>
          </div>
        </div>
        <div class={styles.card }>
          <div class={styles.imgbox}>
          <img src={pic2} alt="" />
            <h2 className={styles.title}>Plumbing</h2>
          </div>

          <div class={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus vitae fugit enim repudiandae
            </p>
          </div>
        </div>
        <div class={styles.card}>
          <div class={styles.imgbox}>
          <img src={pic3} alt="" />
            <h2>Cleaning</h2>
          </div>

          <div class={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus vitae fugit enim repudiandae
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
