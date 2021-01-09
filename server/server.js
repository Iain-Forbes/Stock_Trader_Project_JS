const express = require('express');
const app = express();

const cors = require("cors");
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json()); 


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('portfolio');
    const stocksCollection = db.collection('stocks');
    const stockssRouter = createRouter(stocksCollection);
    app.use('/api/stocks', stocksRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});