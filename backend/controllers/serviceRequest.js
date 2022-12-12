const serviceRequestModel = require('../models/serviceRequest')

const serviceRequest = async(req,res) => {
    try {
        const {request} = req.body
        const serviceRequest = new serviceRequestModel({
            user: req.body.user,
            request
        })
        await serviceRequest.save()
        console.log('Request Submitted', serviceRequest)
        return res.status(200).send('Service Request Submitted')
    } catch (error) {
        console.log(error)
        res.status(400).send('Error, Try Again')
    }
}

const userServiceRequests = async(req, res)=> {
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(200).send('Service Request Submitted')
    }
}

module.exports = { serviceRequest, userServiceRequests };
