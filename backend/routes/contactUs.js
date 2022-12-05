const express = require("express");

const controller = require("../controllers/contactUs");

const router = express.Router();

module.exports = router;

//Post Method
router.post("/contact-us", controller.contactUs);