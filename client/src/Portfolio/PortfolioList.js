import {stock, deleteStock} from "../Services/PortfolioService";
import Portfolio from './Portfolio.js';

const PortfolioList = ({stocks}) => {
    const portfolioInfo = stocks.map(stock => {
        return (
        <Portfolio 
        key = {stock._id}
        stock ={stock} 
        deleteStock={deleteStock}
        />)

    });

    return (
        <>
        {portfolioInfo}
        </>
    );
}

export default PortfolioList;