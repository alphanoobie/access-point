const express = require("express");

const controller = require("../controllers/serviceRequest");

const router = express.Router();

module.exports = router;

//Post Method
router.post("/service-request", controller.serviceRequest);
router.post("/user-service-requests", controller.userServiceRequests);
router.get("/all-service-requests", controller.allServiceRequests);