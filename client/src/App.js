import {useState, useEffect} from "react";
import {getPortfolio, addStock} from "./Services/PortfolioService";
import StockList from "./StockData/StockList";
import StockForm from './StockData/StockForm';
import SearchForm from "./SearchForm";
import './App.css'; 
import { ScrollView } from "@cantonjs/react-scroll-view";


function App() {
  const [stocks, setPortfolio] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  useEffect(() => {
    getPortfolio()
    .then((allStocks) => {
      setPortfolio(allStocks);
    })  
  }, [])

  // This is the local (client-side) update
  const addStockClientSide = (stock) => {
    const buyStock = stock.map(shares => shares);
    buyStock.push(stock);
    setPortfolio(buyStock);
  }

  const findStocks = (code) => {
    // need to add code in here to use an id from the (full) stocks
    // list so that it can be sent back 

    /*
    PortfolioService.getSearchStock(code)
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

  const onStockSelected = (symbol, name, price) => {
    setSymbol(symbol);
    setName(name);
    setPrice(price);
  }

  const onPurchase = (symbol, name, price, volume) => {
    
    // Create object to hold purchase details
    const purchaseObject = {
                        symbol, 
                        name,
                        price, 
                        volume, 
    }
    
    // Update portfolio with new shares
    // console.log("Hi " + purchaseObject)
    return purchaseObject

  }


  return (
    <>
    <header>
      <h3>NIK Ltd    Live Market     My Portfolio</h3>
    </header>
    <div>
    <SearchForm searchStock={findStocks} />
    <br></br>
    <StockForm symbol={symbol} name={name} price={price} onPurchase={onPurchase} />
    <h4>Current Market Trends</h4>
    <ScrollView className="scrollview-data" onEndReached={handleEndReached}>
        <StockList onStockSelected={onStockSelected}/>
      </ScrollView>
      </div>
      </>
  );
}

export default App;
