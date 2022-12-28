const ContactUs = require("../models/contactUs");
require("dotenv").config();
const nodemailer = require("nodemailer");

const contactUs = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  try {
    const { fname, lname, email, phone, message } = req.body;
    const contact = new ContactUs({
      fname,
      lname,
      email,
      phone,
      message,
    });
    await contact.save();
    const options = {
      from: process.env.EMAIL,
      to: email,
      subject: "ACCESS POINT Contact Us Response",
      text: "You have successfully filled the contact us form. Our Admin will get back to you shortly ",
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(info.response);
    });
    console.log("contact form submitted");
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try Again");
  }
};

const allContacts = async (req, res) => {
  try {
    const allContacts = await ContactUs.find({});
    res.json(allContacts);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error, Try Again");
  }
};

module.exports = { contactUs, allContacts };
