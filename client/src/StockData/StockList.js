import {useState, useEffect} from "react";
import {getStockIndex, getStockSymbol} from "../Services/StockService";
import Stock from "./Stock"

const StockList = ({onStockSelected}) => {

    const [stockIndex, setStockIndex] = useState([]);
    const [symbol, setsymbol] = useState([]);
    
    // const [xAxis, setxAxis] = useState([]);
    // const [yAxis, setyAxis] = useState([]);

    let yAxis = [];
    let xAxis = [];

  
    useEffect(() => {
      getStockIndex("ftse")
      .then((allStockIndex) => {
  
      const stockNodes = allStockIndex.feed.entry.map((stock) => {  
        let output = {};
          if (stock){
            stock.content['$t'].split(", ").forEach(str => {
              let [key, value] = str.split(": ");
              if (value === "#N/A") {
                value = null;
            }
              output[key] = value;           
          });        
        };   

        return(
            <Stock 
            symbol = {stock.title['$t']}
            name = {output.name}
            price = {output.price}
            change = {output.change} 
            onStockSelected={onStockSelected}/> 
            )
      });
      setStockIndex(stockNodes)
    })
  }, [])
   
    useEffect(() => {

      let count = 0;

      getStockSymbol("MSFT")
      .then((allSymbolData) => {
        const values = Object.values(allSymbolData["Time Series (Daily)"]).forEach(function (date) {

          // Create x-axis data - using a count increment
          xAxis.push(count);

          // Create y-axis data - using closing position
          yAxis.push(date["4. close"]);

          // Increment
          count += 1;


          Object.entries(date).forEach(function([...date]) {
            // console.log(date);

            // I'm not sure that we need this part?
            // I'm not sure that we need this part?
            // I'm not sure that we need this part?

          })
        })
  
      });

      // This most likely will be called BEFORE the data has been
      // retrieved from the fetch, and therefore will be emmpty.
      console.log("This is the ARRAY: " + yAxis);

    }, [])
    
    return(
        <>
        <table className="index-data-area">
          <tr className="heading" itemScope="rowgroup">
            <th>Symbol</th>
            <th>Company Name</th>
            <th itemID="price">Price</th>
            <th itemID="change">Change +/-</th>
            <hr></hr>
          </tr>
          <br></br>
          {stockIndex}
        </table>
        </>
        )
}

export default StockList;