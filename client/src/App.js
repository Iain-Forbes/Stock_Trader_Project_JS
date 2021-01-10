import {useState, useEffect} from "react";
import {getStocks} from "./StockService";
import StockList from "./StockList";
import './App.css';


function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getStocks()
    .then((allStocks) => {
      setStocks(allStocks);
    })  
  }, [])

  const addStock = (stock) => {
    const buyStock = stock.map(shares => shares);
    buyStock.push(stock);
    setStocks(buyStock);
  }

  const updateStock = updatedStock => {
    //update in DB 
    updateStock(updatedStock);
    //update locally
    const updatedStocksIndex = stocks.findIndex(stock => stock._id === updatedStock._id);
    const updatedStocks = [...stocks];
    updatedStocks[updatedStocksIndex] = updatedStocks;
    setStocks(updatedStocks);
  };

  const deleteStock = (id) => {
    const removeStock = stocks.map(shares => shares);
    const stockToDelete = removeStock.map(shares => shares._id).indexOf(id);
    console.log(stockToDelete);

    removeStock.splice(stockToDelete, 1);
    setStocks(removeStock);
  };

  return (
    <div>
    <h1> Making millions from stocks and shares!</h1>
    {/* <StockForm addStock = {addStock} /> */}
    <StockList
    stocks={stocks}
    updateStock = {updateStock}
    deleteStock = {deleteStock}
    />
    </div>
  );
}

export default App;
