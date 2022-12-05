require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/users');
const contactUs = require("./routes/contactUs")
const cors= require("cors")

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(cors({origin:true, credentials:true}))

app.use(express.json());
app.use('/api', user)
app.use('/api', contactUs)

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})