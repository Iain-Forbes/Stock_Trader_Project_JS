import {stock, deleteStock} from "../Services/PortfolioService";
import Portfolio from './Portfolio.js';

const PortfolioList = ({stocks}) => {
    let portfolioTotal = 0
    // function to check if string is a float
    const isFloat = (x) => { return !!(x % 1); }
    const portfolioInfo = stocks.map(stock => {
        // convert price to numeric
        const price = parseFloat(stock.price);
        if (isFloat(price)) {
            // Accumulated total
            portfolioTotal += price * parseInt(stock.volume);
        }
        return (
        <Portfolio
        key = {stock._id}
        stock ={stock}
        deleteStock={deleteStock}
        />
        )
    });

    portfolioInfo.push("Current Portfolio: £ " + portfolioTotal);
    return (
        <>
        {portfolioInfo}
        </>
    );
}

export default PortfolioList;