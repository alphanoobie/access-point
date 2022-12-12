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

module.exports = { serviceRequest };
