const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    userRole:{
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    }
})

module.exports = mongoose.model('AccessUsers', userSchema)