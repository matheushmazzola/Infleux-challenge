const express = require("express");
const Campaigns = require("../model/campaigns");
const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/', async(request, response)=>{
    var { country } = request.query;

    try{

        const campaign = await Campaigns.findOne({ country: { $regex: country, $options: 'i' }}).sort({ bid: -1});
        return response.send({ campaign });

    }catch(error){
        return response.status(400).send({ error: 'Find failed' }) ;
    }
});

module.exports = app => app.use('/fetch', router);