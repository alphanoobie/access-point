import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import styles from "./ServicePopForm.module.css";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicePopForm = (props) => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [ServiceMessage, setServiceMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const { data } = await axios.post(`http://localhost:3001/api/login/`, {
      //     fName,
      //     lName,
      //     email,
      //     phone,
      //     ServiceMessage,
      //   });
      //   console.log(data);
      toast("Service Requested Successfully");
      navigate("/service");
      window.location.reload(true);
    } catch (err) {
      console.log(err);
      toast(err.response.data);
    }
  };

  return props.trigger ? (
    <div style={{ padding: "1%" }} className={styles.popup}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.trigger}
      >
        <div>
          <Typography
            backgroundColor="#f7f8f8"
            color="textSecondary"
            variant="h3"
            align="center"
            style={{ padding: "1%" }}
          >
            We are here for you!
          </Typography>
          <Grid>
            <Card
              style={{ maxWidth: 450, padding: "10px 10px", margin: "0 auto" }}
            >
              <div
                style={{
                  width: "25px",
                  backgroundColor: "#5FC3E4",
                  borderRadius: "50%",
                  textAlign: "center",
                  position: "relative",
                  left: "95%",
                  cursor: "pointer",
                }}
                onClick={() => props.setTrigger(false)}
              >
                x
              </div>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Fill up the form and our team will get back to you within 24
                hours.
              </Typography>
              <CardContent>
                <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Enter first name"
                        label="First Name"
                        variant="outlined"
                        value={fName}
                        onChange={(event) => setfName(event.target.value)}
                        fullWidth
                        required
                        // onChange={(e)=>setFname(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Enter last name"
                        label="Last Name"
                        variant="outlined"
                        value={lName}
                        onChange={(event) => setlName(event.target.value)}
                        fullWidth
                        required
                        // onChange={(e)=>setLname(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(event) => setemail(event.target.value)}
                        fullWidth
                        required
                        // onChange={(e)=>setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        placeholder="Enter phone number"
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={(event) => setphone(event.target.value)}
                        fullWidth
                        required
                        // onChange={(e)=>setPhone(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        multiline
                        rows={4}
                        placeholder="Type your message here"
                        variant="outlined"
                        value={ServiceMessage}
                        onChange={(event) =>
                          setServiceMessage(event.target.value)
                        }
                        fullWidth
                        required
                        // onChange={(e)=>setMessage(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Backdrop>
    </div>
  ) : (
    ""
  );
};

export default ServicePopForm;
