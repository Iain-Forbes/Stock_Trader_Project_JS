import {stock, deleteStock} from "../Services/PortfolioService";
import Portfolio from './Portfolio.js';

const PortfolioList = ({stocks}) => {
    let portfolioTotal = 0

    // function to check if string is a float
    const isFloat = (x) => { return !!(x % 1); }

    // function to check if the string is an int
    const isInt = (value) => {
        return !isNaN(value) && 
               parseInt(Number(value)) == value && 
               !isNaN(parseInt(value, 10));
      }

    const portfolioInfo = stocks.map(stock => {

        // convert price to numeric
        // const price = parseFloat(stock.price);

        if (isFloat(parseFloat(stock.price))) {
            
            // Accumulated total - using float data
            portfolioTotal += parseFloat(stock.price) * parseInt(stock.volume);

        } else if (isInt(parseInt(stock.price))) {

            // Accumulated total - using int data
            portfolioTotal += parseInt(stock.price) * parseInt(stock.volume);
        }


        return (
        <Portfolio
        key = {stock._id}
        stock ={stock}
        deleteStock={deleteStock}
        />
        )
    });

    portfolioTotal /= 100;

    portfolioInfo.push("Current Portfolio: £ " + Math.round(portfolioTotal));
    return (
        <>
        {portfolioInfo}
        </>
    );
}

export default PortfolioList;