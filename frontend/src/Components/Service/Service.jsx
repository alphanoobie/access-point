import React from "react";
import pic1 from "../../assets/img/pic1.jpg";
import pic2 from "../../assets/img/homepic.jpg";
import pic3 from "../../assets/img/painting.jpg";
import pic4 from "../../assets/img/electrical.jpg";
import ServicePopForm from "./SevicePopForm";

import styles from "./Service.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Service = (props) => {
  const [popUp, setPopup] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <ServicePopForm trigger={popUp} setTrigger={setPopup} />

      <div className={styles.selfcontainer}>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img src={pic1} alt="" />
            <h2>MAINTENANCE</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.contentpara}>
              Our maintenance and repair contracts are completed with the
              dedication to convey results.We have broad experience of working
              with all sizes, scales and sorts of corporates.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img src={pic2} alt="" />
            <h2 className={styles.title}>PLUMBING</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.contentpara}>
              There’s never a decent time for a plumbing emergency! Isn’t it
              nice to know that Access Point is available for you every time,
              right there when you need us.From faucets, installations and pipes
              to full redesigns,our expert crew can deal with all your business
              plumbing needs.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img src={pic3} alt="" />
            <h2 className={styles.title}>PAINTING</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.contentpara}>
              When your Painting, Coatings, Waterproofing or Repair Needs are
              high on top of the list, our trained experts have the Experience
              and Expertise, to present to you the outcomes you require. The
              team’s professionalism and interactions will put you at ease that
              the work will be done, quickly, efficiently and correctly
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img src={pic4} alt="" />
            <h2 className={styles.title}>ELECTRICAL</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.contentpara}>
              Power is vital. Indeed, in this age it's difficult to do quite a
              bit of anything around the office without power. You need to make
              sure your next electrical fitting or electrical repair is done
              securely and it's done well by a reliable and educated repairman.
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className={styles.requestBtn}
          onClick={() => (props.logined ? setPopup(true) : navigate("/login"))}
        >
          Request Service
        </button>
      </div>
    </div>
  );
};

export default Service;
