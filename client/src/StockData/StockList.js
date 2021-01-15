import {useState, useEffect} from "react";
import {getStockIndex, getStockSymbol} from "../Services/StockService";
import Stock from "./Stock"


const StockList = ({onStockSelected}) => {

    const [stockIndex, setStockIndex] = useState([]);
    const [symbol, setsymbol] = useState([]);
    
    // const [xAxis, setxAxis] = useState([]);
    // console.log("This is the" + xAxis)
    // const [yAxis, setyAxis] = useState([]);
    // console.log("I'm the chart data" + ": " + yAxis)

  
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
      let yAxis = []
      let xAxis = []
      const chartData = Object.values(allSymbolData["Time Series (Daily)"]).forEach(function (date) {
        Promise.all(([date["4. close"]])).then(data  => {
          yAxis.push(data)
        });

        // // Create x-axis data - using a count increment
          xAxis.push(count);
    
        // Increment
        count += 1;
      })
      console.log(xAxis)
      console.log(yAxis)
    })
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