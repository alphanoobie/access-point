const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const ServiceRequestSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "AccessUsers",
    },

    request: {
      type: String,
      enum: ["Painting", "Maintainance", "Plumbing", "Electrical"],
    },

    completeStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AccessServiceRequest", ServiceRequestSchema);
