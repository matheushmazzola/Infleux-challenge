const express = require("express");
const Campaigns = require("../model/campaigns");
const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/create', async(request, response)=>{

    try{

        const campaigns = await Campaigns.create(request.body);
        return response.send({ campaigns });

    }catch(error){
        return response.status(400).send({ error: 'Creation failed' }) ;
    }
});

router.get('/find', async(request, response)=>{
    const { campaign_name, advertiser, country, conversion, bid } = request.query;

    try{
        if(!campaign_name && !advertiser && !country && !conversion && !bid){
            var campaign = await Campaigns.find();
        }else{
            var campaign = await Campaigns.find({$or:[
                {campaign_name: campaign_name ? campaign_name : ""},
                {advertiser: advertiser ? advertiser : ""},
                {country: country ? country : ""},
                {conversion: conversion ? conversion : ""},
                {bid: bid ? bid : "" }]});
        }

        return response.send({ campaign });

    }catch(error){
        return response.status(400).send({ error: 'Find failed' }) ;
    }
});

router.put('/edit', async(request, response)=>{
    const { campaign_name, advertiser, country, conversion, bid } = request.body;
    const id = request.query;
    var _id = { _id: id };

    try{
        const campaigns = await Campaigns.updateOne(_id,{ $set: { campaign_name, advertiser, country, conversion, bid }});
        return response.send({ success: "successfully update campaign" });

    }catch(error){
        return response.status(400).send({ error: 'Edit failed' }) ;
    }
});

router.delete('/delete', async(request, response)=>{
    const id = request.query;
    var deleted = { _id: id };

    try{

        const campaigns = await Campaigns.deleteOne(deleted);
        return response.send({ success: "successfully deleted campaign" });

    }catch(error){
        return response.status(400).send({ error: 'Delete failed' }) ;
    }
});

module.exports = app => app.use('/campaigns', router);