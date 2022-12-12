const ContactUs = require("../models/contactUs");

const contactUs = async (req, res) => {
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
    console.log("contact form submitted");
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try Again");
  }
};

const allContacts = async (req, res) => {
  try {
    const allContacts = await ContactUs.find({})
    res.json(allContacts)
  } catch (error) {
    console.log(error);
  }
};

module.exports = { contactUs, allContacts };
