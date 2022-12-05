import React from "react";
import styles from "./Login.module.css";
import {toast} from "react-toastify"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const { data } = await axios.post(`http://localhost:3001/api/login/`, { email, password });
        console.log(data);
        toast("Login Successful");
        window.localStorage.setItem("user", JSON.stringify(data))
        window.localStorage.setItem("isLoggedIn",true)   //see if user is logged in or no 
        navigate('/')
    } catch (err) {
      console.log(err);
      toast(err.response.data)
    }
  };
  return (
    <div className={styles.logincontianer}>
      <div className={styles.header}>
        <h2>Login</h2>
      </div>
      <form className={styles.loginform} onSubmit={handleSubmit}>
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

        <label className={styles.labels}>Password</label>
        <input
          className={styles.inputs}
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.submitbutton}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
