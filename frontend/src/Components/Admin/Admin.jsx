import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./Admin.module.css";

export default function Admin() {
  const [serviceRequests, setserviceRequests] = useState("");
  const [loading, setLoading] = useState(false);

  const getServiceRequestsData = async () => {
    setLoading(true);
    const allServiceRequests = await axios.get(
      "http://localhost:3001/api/all-service-requests"
    );
    console.log(allServiceRequests.data);
    setserviceRequests(allServiceRequests.data);
    setLoading(false);
  };

  const handleCompletedClick = (e) => {
    console.log(e.target.getAttribute('index'));
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
          <TableHead>
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
                    {serviceRequest.completeStatus
                      ? "Completed"
                      : "Service Pending"}
                  </TableCell>
                  <TableCell>
                    {serviceRequest.paymentStatus ? "Paid" : "Not Paid"}
                  </TableCell>
                  <TableCell index={index} onClick={handleCompletedClick}>
                    Mark Completed
                  </TableCell>
                  <TableCell>Mark Paid</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
