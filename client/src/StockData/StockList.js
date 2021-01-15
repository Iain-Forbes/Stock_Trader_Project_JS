import {useState, useEffect} from "react";
import {getStockIndex, getStockSymbol} from "../Services/StockService";
import Stock from "./Stock"


const StockList = ({onStockSelected}) => {

    const [stockIndex, setStockIndex] = useState([]);
    const [symbol, setsymbol] = useState([]);
    
    const [xAxis, setxAxis] = useState([]);
    console.log(xAxis)
    const [yAxis, setyAxis] = useState([]);

  
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
      const chartData = Object.values(allSymbolData["Time Series (Daily)"]).forEach(function (date) {
        Promise.all(([date["4. close"]])).then(data  => {
          setxAxis(data)
        });

        // // // Create x-axis data - using a count increment
        // setxAxis(count);
        // setyAxis;
      
        
        // console.log("This is the" + yAxis)
        // console.log("This is the" + xAxis)

        // // Increment
        // count += 1;
      })

     
    });
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