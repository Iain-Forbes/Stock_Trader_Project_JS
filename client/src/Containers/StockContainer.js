import {useState, useEffect} from "react";
import {getStockIndex, getStockSymbol} from "../Services/StockService";
import StockList from "../StockData/StockList";


function StockContainer() {
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
            stock.title['$t'], 
            output.name, 
            output.price, 
            output.change
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
    
    return (
        <div>
          <StockList stocks={stockIndex}/> 
        </div>
      );

  }
  
  export default StockContainer;