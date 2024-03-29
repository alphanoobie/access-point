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
    const allServiceRequests = await serviceRequestModel
      .find({ user: req.body.user })
      .populate("user")
      .exec();
    console.log(allServiceRequests);
    return res.status(200).send(allServiceRequests);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error try again");
  }
};

const allServiceRequests = async (req, res) => {
  try {
    const allServiceRequests = await serviceRequestModel
      .find()
      .populate("user")
      .exec();
    console.log(allServiceRequests);
    return res.status(200).send(allServiceRequests);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error try again");
  }
};

const markStatus = async (req, res) => {
  try {
    // const existingData = await serviceRequestModel.findOne(req.body).exec();
    // console.log(existingData.completeStatus)
    const changeStatus = req.body.status;
    console.log(req.body._id)
    // console.log(changeStatus)
    const data = await serviceRequestModel
      .findOneAndUpdate(
        {_id: req.body._id},
        { Status: changeStatus },
        { new: true }
      )
      .populate("user")
      .exec();

    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Edit Request Error");
  }
};

const markPaid = async (req, res) => {
  try {
    const existingData = await serviceRequestModel.findOne(req.body).exec();
    // console.log(existingData.completeStatus)
    const changeStatus = !existingData.paymentStatus;
    // console.log(changeStatus)
    const data = await serviceRequestModel
      .findOneAndUpdate(req.body, { paymentStatus: changeStatus }, { new: true })
      .populate("user")
      .exec();

    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Edit Request Error");
  }
};
module.exports = {
  serviceRequest,
  userServiceRequests,
  allServiceRequests,
  markStatus,
  markPaid
};
