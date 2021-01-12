import {useState, useEffect} from "react";
import {getPortfolio} from "./Services/PortfolioService";
import StockList from "./StockData/StockList";
import SearchForm from "./SearchForm";
import './App.css'; 
import { ScrollView } from "@cantonjs/react-scroll-view";


function App() {
  const [stocks, setPortfolio] = useState([]);

  useEffect(() => {
    getPortfolio()
    .then((allStocks) => {
      setPortfolio(allStocks);
    })  
  }, [])

  const addStock = (stock) => {
    const buyStock = stock.map(shares => shares);
    buyStock.push(stock);
    setPortfolio(buyStock);
  }

  const findStocks = (code) => {
    // need to add code in here to use an id from the (full) stocks
    // list so that it can be sent back 

    /*
    StockService.getSearchStock(code)
    .then(set search result form data)
    */
    
    // Need to add code in here - probably will need a useState for the search field too.
  }

  const updateStock = updatedStock => {
    //update in DB 
    updateStock(updatedStock);
    //update locally
    const updatedStocksIndex = stocks.findIndex(stock => stock._id === updatedStock._id);
    const updatedStocks = [...stocks];
    updatedStocks[updatedStocksIndex] = updatedStocks;
    setPortfolio(updatedStocks);
  };

  const deleteStock = (id) => {
    const removeStock = stocks.map(shares => shares);
    const stockToDelete = removeStock.map(shares => shares._id).indexOf(id);
    console.log(stockToDelete);

    removeStock.splice(stockToDelete, 1);
    setPortfolio(removeStock);
  };

  const handleEndReached = () => {
    console.log("load more");
  };

  return (
    <>
    <header>
      <h1></h1>
    </header>
    <div>
    <h1> NIK Stocks </h1>
    <SearchForm searchStock={findStocks} />
      <h4>Top 10?</h4>
    <ScrollView className="scrollview-data" onEndReached={handleEndReached} style={{ height: '50vh' }}>
        <StockList/>
      </ScrollView>
      </div>
      </>
  );
}

export default App;
