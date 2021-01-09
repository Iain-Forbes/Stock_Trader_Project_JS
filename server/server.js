const express = require('express');
const app = express();

const cors = require("cors");
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json()); 


require("dotenv").config(); //API_KEY VAR in dotenv
const fetch = require('node-fetch'); 



const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('portfolio');
    const stocksCollection = db.collection('stocks');
    const stocksRouter = createRouter(stocksCollection);
    app.use('/api/stocks', stocksRouter);
  })
  .catch(console.err);

//External API Fetch access, localhost:3000/stock-data displays one entry for Microsoft
  app.get('/stock-data', (req, res ) =>{
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo`; //placeholder 

  fetch(url)
    .then(jsonData => jsonData.json())
    .then(data => res.json(data));
}, [])



app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});