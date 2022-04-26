const model = require('../../models/campaigns.model');

function getCampaigns(req, res) {
  return res.json(model);
}

function postCampaign(req, res) {
  console.log(req.body);
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend project name',
    });
  }
  const newCampaign = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newCampaign);
  res.json(model);
}

function getCampaign(req, res) {
  const campaignId = Number(req.params.campaignId);
  const campaign = model[campaignId];
  if (campaign) {
    return res.status(200).json(campaign);
  } else {
    return res.status(404).json({
      error: 'Campaign not found.',
    });
  }
}

module.exports = {
  getCampaigns,
  postCampaign,
  getCampaign,
};
