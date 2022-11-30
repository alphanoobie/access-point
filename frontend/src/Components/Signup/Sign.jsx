import React from "react";
import styles from "./Sign.module.css";

const Sign = () => {
  return (
    <div className={styles.signcontianer}>
      <div className={styles.header}>
        <h2>Sign Up</h2>
      </div>
      <form className={styles.signform}>
        <label className={styles.labels}>Email</label>
        <input
          className={styles.inputs}
          type="email"
          id="email"
          name="email"
          placeholder="youremail@mail.com"
        />

        <label className={styles.labels}>Create Password</label>
        <input
          className={styles.inputs}
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />

        <label className={styles.labels}>Confirm Password</label>
        <input
          className={styles.inputs}
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />

        <button className={styles.submitbutton}>Submit</button>
      </form>
    </div>
  );
};

export default Sign;
