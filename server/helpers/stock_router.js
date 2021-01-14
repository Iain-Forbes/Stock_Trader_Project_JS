const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("dotenv").config();

const createStockRouter = function () {

  const stockRouter = express.Router();

  //This is the API data 

  stockRouter.get('/index/ftse', (req, res ) =>{
    const url = `https://spreadsheets.google.com/feeds/list/0AhySzEddwIC1dEtpWF9hQUhCWURZNEViUmpUeVgwdGc/1/public/basic?alt=json`; 

    fetch(url)
      .then(jsonData => jsonData.json())
      .then(data => res.json(data));
    }, [])


<<<<<<< HEAD
    stockRouter.get('/company/MSFT', (req, res ) =>{
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo`; 
=======
    stockRouter.get('/company/msft', (req, res ) =>{
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=msft&apikey=demo`; 
>>>>>>> d1a260f54449377d824e0b1f6f1e9a028fdd199e
  
    fetch(url)
      .then(jsonData => jsonData.json())
      .then(data => res.json(data));
    }, [])

    
    return stockRouter
};


module.exports = createStockRouter;

