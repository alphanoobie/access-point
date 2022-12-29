import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { color } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./Admin.module.css";

export default function Admin() {
  const [serviceRequests, setserviceRequests] = useState("");
  const [targetValue, setTargetValue] = useState("");

  const handlevalue = (value) => {
    setTargetValue(value);
  };

  const getServiceRequestsData = async () => {
    const allServiceRequests = await axios.get(
      "http://localhost:3001/api/all-service-requests"
    );
    console.log(allServiceRequests.data);
    setserviceRequests(allServiceRequests.data);
  };

  const handleCompletedClick = async (e) => {
    const clickIndex = e.target.getAttribute("index");
    const id = serviceRequests[clickIndex]._id;
    const data = await axios.put("http://localhost:3001/api/mark-complete", {
      _id: id,
    });
    // console.log(data.data)
    const sr = serviceRequests.slice();
    sr[clickIndex] = data.data;
    // console.log(sr);
    setserviceRequests(sr);
  };

  const handlePaidClick = async (e) => {
    const clickIndex = e.target.getAttribute("index");
    const id = serviceRequests[clickIndex]._id;
    const data = await axios.put("http://localhost:3001/api/mark-paid", {
      _id: id,
    });
    // console.log(data.data)
    const sr = serviceRequests.slice();
    sr[clickIndex] = data.data;
    // console.log(sr);
    setserviceRequests(sr);
  };

  useEffect(() => {
    try {
      getServiceRequestsData();
    } catch (error) {
      toast("Could Not Fetch Service Requests");
    }
  }, []);
  return (
    <div>
      <TableContainer className={styles.tableContainer}>
        <h1>All Service Requests</h1>

        <Table className={styles.Table}>
          <TableHead style={{ backgroundColor: "#2193b0" }}>
            <TableCell>ID</TableCell>
            <TableCell>User Email</TableCell>
            <TableCell>Request Type</TableCell>
            <TableCell>Complete Status</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableHead>
          <TableBody>
            {serviceRequests &&
              serviceRequests.map((serviceRequest, index) => (
                <TableRow key={index} component="th" scope="row">
                  <TableCell>{serviceRequest._id}</TableCell>
                  <TableCell>{serviceRequest.user.email}</TableCell>
                  <TableCell>{serviceRequest.request}</TableCell>
                  <TableCell>
                    {targetValue}
                    {/* {serviceRequest.completeStatus
                      ? "Completed"
                      : "Service Pending"} */}
                  </TableCell>
                  <TableCell
                    style={{
                      color:
                        serviceRequest.paymentStatus === true ? "green" : "red",
                    }}
                  >
                    {serviceRequest.paymentStatus ? "Paid" : "Not Paid"}
                  </TableCell>

                  <TableCell>
                    <Select
                      index={index}
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={targetValue}
                      label="Age"
                      onChange={(e) => handlevalue(e.target.value)}
                    >
                      <MenuItem value="None"> None </MenuItem>
                      <MenuItem value={"started"}>Started</MenuItem>
                      <MenuItem value={"ongoing"}>On Going</MenuItem>
                      <MenuItem value={"finished"}>Finished</MenuItem>
                    </Select>
                    {/* <Button
                      index={index}
                      onClick={handleCompletedClick}
                      style={{
                        border: "1px solid black",
                        backgroundColor: "#F5F5DC",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      {serviceRequest.completeStatus
                        ? "Mark Pending"
                        : "Mark Complete"}
                    </Button> */}
                  </TableCell>
                  <TableCell>
                    <Button
                      index={index}
                      onClick={handlePaidClick}
                      style={{
                        border: "1px solid black",
                        backgroundColor: "#F5F5DC",
                        color: "black",
                      }}
                    >
                      {serviceRequest.paymentStatus
                        ? "Mark Not Paid"
                        : "Mark Paid"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
