const express = require("express");
const User = require("../models/users");

const controller = require("../controllers/users");

const router = express.Router();

module.exports = router;

//Post Method
router.post("/signup", controller.signup);
