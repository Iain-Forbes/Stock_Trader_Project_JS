const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("dotenv").config();

const timePeriod = require('./constraints');

const AVRouter = function () {

  const AlphaRouter = express.Router();

//External API Fetch access, localhost:3000/stock-data displays one entry for Microsoft
AlphaRouter.post('/stock', (req, res ) =>{
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=process.env.API_KEY`; 
  
    fetch(url)
      .then(jsonData => jsonData.json())
      .then(data => res.json(data));
  }, [])

AlphaRouter.post('/stocks', (req, res ) =>{
    const body = JSON.parse(JSON.stringify(req.body));
    const { ticker, type } = body;
    const url = `https://www.alphavantage.co/query?function=${timePeriod(type)}&symbol=${ticker}&apikey=process.env.API_KEY `
  
    fetch(url)
      .then(jsonData => jsonData.json())
      .then(data => res.json(data));
  }, [])


    
    return AlphaRouter
};


module.exports = AVRouter;

