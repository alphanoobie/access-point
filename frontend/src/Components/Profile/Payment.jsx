import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import qr from "../../assets/img/qr.png";

const Payment = () => {
  return (
    <Card style={{ width: "30%" }}>
      <CardHeader
        style={{ textAlign: "center" }}
        title="Rs 599"
        subheader="Payment QR Code"
      ></CardHeader>
      <CardMedia component="img" alt="qr" height="337" image={qr} />
      <CardContent>
        <Typography
          style={{ textAlign: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Scan and Pay
        </Typography>
        <Typography
          style={{ position: "static", textAlign: "center" }}
          variant="body2"
          color="text.secondary"
        >
          Admin will confirm the payment and you will receive payment
          confirmation mail within 24 hrs.
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{ margin: "0 80%" }} size="large">
          Done
        </Button>
      </CardActions>
    </Card>
  );
};

export default Payment;
