import React from "react";
import {
  Typography, Card,CardContent, Grid,  TextField,  Button,} from "@mui/material";
import {toast} from "react-toastify"
import axios from "axios";
import { useState } from "react";



const Contact = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const {data} = await axios.post('http://localhost:3001/api/contact-us/', {fname, lname, email, phone, message});
      toast("Thank you! Our team will get back to you soon.")
      console.log(data);
      window.localStorage.setItem("user",JSON.stringify(data))
    }
    catch(err){
      console.log(err);
      toast(err.response.data)
    }
  }


  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Contact Us 
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Fill up the form and our team will get back to you within 24 hours.
          </Typography>
          <CardContent>
            <form style={{marginTop: "20px"}} onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e)=>setFname(e.target.value)}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e)=>setLname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e)=>setMessage(e.target.value)}
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
  );
};

export default Contact;
