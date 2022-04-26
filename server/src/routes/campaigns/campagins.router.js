const express = require('express');

const { getCampaigns } = require('./campaigns.controller');

const campaginsRouter = express.Router();

campaginsRouter.get('/', getCampaigns);

module.exports = campaginsRouter;
