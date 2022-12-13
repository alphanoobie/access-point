const serviceRequestModel = require("../models/serviceRequest");

const serviceRequest = async (req, res) => {
  try {
    const { request } = req.body;
    const serviceRequest = new serviceRequestModel({
      user: req.body.user,
      request,
    });
    await serviceRequest.save();
    console.log("Request Submitted", serviceRequest);
    return res.status(200).send("Service Request Submitted");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error, Try Again");
  }
};

const userServiceRequests = async (req, res) => {
  try {
    const allServiceRequests = await serviceRequestModel.find({ user: req.body.user }).exec();
    console.log(allServiceRequests)
    return res.status(200).send(allServiceRequests)
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error try again");
  }
};

const allServiceRequests = async (req, res) => {
    try {
      const allServiceRequests = await serviceRequestModel.find().exec();
      console.log(allServiceRequests)
      return res.status(200).send(allServiceRequests)
    } catch (error) {
      console.log(error);
      return res.status(400).send("Error try again");
    }
  };



module.exports = { serviceRequest, userServiceRequests, allServiceRequests };
