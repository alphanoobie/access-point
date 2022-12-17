import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import axios from "axios";
import { useState } from "react";

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    const userObject = JSON.parse(user);
    axios
      .post("http://localhost:3001/api/user-service-requests", {
        user: userObject._id,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const arr = data.map((data, index) => {
    return (
        <tr>
          <td index={index} >{data._id}</td>
          <td index={index} >{data.request}</td>
          <td index={index} 
            style={{
              color:
                data.completeStatus.toString() === "true" ? "green" : "red",
            }}
          >
            {data.completeStatus.toString()}
          </td>
          <td index={index} 
            style={{
              color:
                data.paymentStatus.toString() === "true" ? "green" : "red",
            }}
          >
            {data.paymentStatus.toString()}
          </td>
          <td index={index} >{data.updatedAt}</td>
        </tr>
    );
  });
  return  (
    <div>
      <table className={styles.servicerequest}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Service</th>
            <th>Completion</th>
            <th>Payment</th>
            <th>Time</th>
          </tr>
        </tbody>
        {arr}
      </table>
    </div>
  ) ;
};

export default Profile;
