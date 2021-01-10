import Stock from './Stock.js';

const StockList = (stocks) => {
    const stockPrices = stocks.map(stock => {
        return <Stock 
        key = {stock._id}
        stock ={stock} />
    });

    return (
        <>
        {stockPrices}
        </>
    );
}


export default StockList;