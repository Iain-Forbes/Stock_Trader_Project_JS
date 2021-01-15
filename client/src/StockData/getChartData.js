import {useState, useEffect} from "react";
import {getStockSymbol} from "../Services/StockService";
    

const ChartData = () => {
    
    const [xAxis, setxAxis] = useState([]);
    console.log("I am an" + xAxis + "from chartdata")
    const [yAxis, setyAxis] = useState([]);

    useEffect(() => {

        let count = 0;
    
        getStockSymbol("MSFT")
        .then((allSymbolData) => {
          const chartData = Object.values(allSymbolData["Time Series (Daily)"]).forEach(function (date) {
            Promise.all(([date["4. close"]])).then(data  => {
              setxAxis(data)
            });
        });
        console.log(xAxis)
      }, [])
      return(
          xAxis={xAxis},
          yAxis={yAxis}
      )
   }
   
)}

export default ChartData

