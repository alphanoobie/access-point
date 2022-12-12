const express = require("express");

const controller = require("../controllers/serviceRequest");

const router = express.Router();

module.exports = router;

//Post Method
router.post("/service-request", controller.serviceRequest);