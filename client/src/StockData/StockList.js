import {useState, useEffect} from "react";
import {getStockIndex, getStockSymbol} from "../Services/StockService";
import Stock from "./Stock"


const StockList = () => {

    const [stockIndex, setStockIndex] = useState([]);
    const [symbol, setsymbol] = useState([]);
  
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
            title = {stock.title['$t']}
            name = {output.name}
            price = {output.price}
            change = {output.change} /> 
            )
      });
      setStockIndex(stockNodes)
    })
  }, [])
   
    useEffect(() => {
      getStockSymbol("IBM")
      .then((allSymbolData) => {
        const values = Object.values(allSymbolData["Time Series (Daily)"])
        console.log(values[0]["2. high"])
      });
      
    }, [])
    
    return(
        <>
        <h1>ftse 101</h1>
        <table className="index-data-area">
          <tr itemID="heading">
            <th>Symbol</th>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change +/-</th>
          </tr>
          {stockIndex}
        </table>
        </>
        )
}

export default StockList;