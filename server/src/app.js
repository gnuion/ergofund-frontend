const express = require('express');
const cors = require('cors');

const campaignsRouter = require('./routes/campaigns/campagins.router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());

app.use('/campaigns', campaignsRouter);

module.exports = app;
