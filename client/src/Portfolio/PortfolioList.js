import Stock from './Portfolio.js';

const StockList = ({stocks}) => {
    const stockInfo = stocks.map(stock => {
        return (
        <Stock 
        key = {stock._id}
        stock ={stock} />)
    });

    return (
        <>
        {stockInfo}
        </>
    );
}


export default StockList;