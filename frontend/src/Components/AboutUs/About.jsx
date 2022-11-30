import React from "react";
import about_pic from "../../assets/img/aboutUs_pic.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.wrapper}></div>
        <img className={styles.aboutPhoto} src={about_pic} alt="aboutUs Pic" />
        <div className={styles.heading}>About Us</div>
      </div>
      {/* <div className={styles.middle}>
        <p className={styles.text}>
          We ensure A deliberate approach towards your necessities including
          site overviews and suggestions ensures that you get the workplace you
          require. We take complete liability from planning, taking the place,
          buying the branch, making the furniture to effective running of the
          site at our clients place. We help our clients change their fantasy
          into reality.
        </p>
      </div> */}
      <div className={styles.down}>
        <div className={styles.container}>
          <div className={styles.front + " " + styles.side}>
            <div className={styles.content}>
              <h1>Our Vision</h1>
              <p>
                “To become leading player in Repair and Maintenance Industry
                with pan India footprint driven by profitable operations and
                sustained business growth.”
              </p>
            </div>
          </div>
          <div className={styles.back + " " + styles.side}>
            <div className={styles.content}>
              <h1>Our Mission</h1>
              <p>
                “To become leading player in Repair and Maintenance Industry
                with pan India footprint driven by profitable operations and
                sustained business growth.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
