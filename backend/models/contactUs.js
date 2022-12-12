const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
  fname: {
    required: true,
    type: String,
  },
  lname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("AccessContactUs", ContactUsSchema);
