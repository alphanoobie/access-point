import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Radio,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { toast } from "react-toastify";
import styles from "./ServicePopForm.module.css";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicePopForm = (props) => {
  const [service, setService] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setService(event.target.value);
  };

  const handleCardClick = (service_name) => {
    setService(service_name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const { data } = await axios.post(`http://localhost:3001/api/login/`, {
      //     service
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
            style={{ padding: "1%", width: "700px" }}
          >
            We are here for you!
          </Typography>
          <Grid>
            <Card
              style={{
                maxWidth: "700px",
                padding: "10px 10px",
                margin: "0 auto",
              }}
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
                  <Card
                    onClick={() => handleCardClick("repair")}
                    sx={{ maxWidth: 800, margin: "2%", padding: "1%" }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Radio
                          checked={service === "repair"}
                          onChange={handleChange}
                          value="repair"
                          name="radio-buttons"
                          style={{ verticalAlign: "sub" }}
                        />
                        <Typography
                          display="inline"
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          REPAIR & MAINTAINENCE
                        </Typography>
                        <Typography
                          ml={5}
                          variant="body2"
                          color="text.secondary"
                        >
                          Starting from 399/- onwards. Additional cost depends
                          on parts and equipment.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions></CardActions>
                  </Card>

                  <Card
                    onClick={() => handleCardClick("turnkey")}
                    sx={{ maxWidth: 800, margin: "2%", padding: "1%" }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Radio
                          checked={service === "turnkey"}
                          onChange={handleChange}
                          value="turnkey"
                          name="radio-buttons"
                          size="small"
                          style={{ verticalAlign: "sub" }}
                        />
                        <Typography
                          display="inline"
                          gutterBottom
                          variant="h5"
                          component="div"
                          mt="10"
                        >
                          TURNKEY PROJECTS
                        </Typography>
                        <Typography
                          ml={5}
                          variant="body2"
                          color="text.secondary"
                        >
                          Starting from 499/- onwards. Additional cost depends
                          on parts and equipment.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions></CardActions>
                  </Card>

                  <Card
                    onClick={() => handleCardClick("staffing")}
                    sx={{ maxWidth: 800, margin: "2%", padding: "1%" }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Radio
                          checked={service === "staffing"}
                          onChange={handleChange}
                          value="staffing"
                          name="radio-buttons"
                          style={{ verticalAlign: "sub" }}
                        />
                        <Typography
                          display="inline"
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          STAFFING SOLUTIONS
                        </Typography>
                        <Typography
                          ml={5}
                          variant="body2"
                          color="text.secondary"
                        >
                          Starting from 599/- onwards. Additional cost depends
                          on parts and equipment.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions></CardActions>
                  </Card>

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
