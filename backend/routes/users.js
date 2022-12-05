const express = require("express");

const controller = require("../controllers/users");

const router = express.Router();

module.exports = router;

//Post Method
router.post("/signup", controller.signup);
router.post("/login", controller.login)
