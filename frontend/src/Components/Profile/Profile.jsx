import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import axios from "axios";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Payment from "./Payment";

const Profile = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const paymentButton = (
    <button className={styles.pay_button} onClick={handleToggle}>
      Pay
    </button>
  );

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    const userObject = JSON.parse(user);
    axios
      .post("http://localhost:3001/api/user-service-requests", {
        user: userObject._id,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const arr = data.map((data, index) => {
    return (
      <tr key={index}>
        <td index={index}>{data._id}</td>
        <td index={index}>{data.request}</td>
        <td
          index={index}
          // style={{
          //   color: data.completeStatus.toString() === "true" ? "green" : "red",
          // }}
        >
          {data.Status}
        </td>
        <td
          index={index}
          style={{
            color: data.paymentStatus.toString() === "true" ? "green" : "red",
          }}
        >
          {data.paymentStatus.toString()}
          {data.paymentStatus.toString() === "false" && paymentButton}
        </td>
        <td index={index}>{data.updatedAt}</td>
      </tr>
    );
  });
  return (
    <div>
      <div className={styles.profilecontainer}>
        <table className={styles.servicerequest}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Service</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{arr}</tbody>
        </table>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {<Payment />}
      </Backdrop>
    </div>
  );
};

export default Profile;
