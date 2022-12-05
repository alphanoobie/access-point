import React from 'react'
import {Typography, Card,CardContent, Grid,  TextField,  Button,} from "@mui/material";
import styles from "./Popup.css"



const SevicePopForm = (props) => {
  return  (props.trigger) ? (
    <div className= {styles.popup}>
      <div className={styles.popInner}>
      <Typography gutterBottom variant="h3" align="center">
        We are here for you!
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>
        <div style={{width:"25px",backgroundColor:"gray", borderRadius:"50%",textAlign:"center", position:"relative",left:"95%",cursor:"pointer"}} onClick={()=> props.setTrigger(false)}>x</div>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Fill up the form and our team will get back to you within 24 hours.
          </Typography>
          <CardContent>
            <form style={{marginTop: "20px"}} >
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
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
    </div>
  ):"";
  
}

export default SevicePopForm;