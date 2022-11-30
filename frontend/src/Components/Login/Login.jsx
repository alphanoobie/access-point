import React from "react";
import styles from "./Login.module.css";

const login = () => {
  return (
    <div className={styles.logincontianer}>
      <div className={styles.header}>
        <h2>Login</h2>
      </div>
      <form className={styles.loginform}>
        <label className={styles.labels}>Email</label>
        <input
          className={styles.inputs}
          type="email"
          id="email"
          name="email"
          placeholder="youremail@mail.com"
        />

        <label className={styles.labels}>Password</label>
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

export default login;
