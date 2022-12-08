import React, { useState } from "react";
import styles from "./Sign.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (password === confirmPassword) {
        const { data } = await axios.post(`http://localhost:3001/api/signup/`, { email, password });
        console.log(data);
        toast("Signup successful please login");
        navigate("/login")
      } else {
        toast("Passwords do not match");
      }
    } catch (err) {
      console.log(err);
      toast(err.response.data)
    }
  };
  return (
    <div className={styles.signcontianer}>
      <div className={styles.header}>
        <h2>Sign Up</h2>
      </div>
      <form  onSubmit={handleSubmit} className={styles.signform}>
        <label className={styles.labels}>Email</label>
        <input
          className={styles.inputs}
          type="email"
          id="email"
          name="email"
          placeholder="youremail@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.labels}>Create Password</label>
        <input
          className={styles.inputs}
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className={styles.labels}>Confirm Password</label>
        <input
          className={styles.inputs}
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className={styles.submitbutton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sign;
