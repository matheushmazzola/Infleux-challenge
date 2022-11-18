const mongoose = require("../database");

const CampaignsSchema = new mongoose.Schema({

    campaign_name: {
        type: String,
        require: true,
    },

    advertiser: {
        type: String,
        require: true,
    },

    country: {
        type: String,
        require: true,
    },

    conversion: {
        type: String,
        require: true,
    },

    bid: {
        type: Number,
        require: true,
    },

    CreatedAt: {
        type: Date,
        defeault: Date.now,

    },

});

const Campaigns = mongoose.model('campaigns', CampaignsSchema);

module.exports = Campaigns;