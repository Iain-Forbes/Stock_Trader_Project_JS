import './App.css';
import {useState, useEffect} from "react";
import {getStocks} from "./StockService";



function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getStocks()
    .then((allStocks) => {
      setStocks(allStocks);
    })  
  }, [])

  const addStock = (stock) => {
    const buyStock = stock.map(s => s);
    buyStock.push(stock);
    setStocks(buyStock);
  }

  const deleteStock = (id) => {
    const removeStock = 
  }
  return (
    <>
    <h1> Making millions from stocks and shares!</h1>
    </>
  );
}

export default App;
