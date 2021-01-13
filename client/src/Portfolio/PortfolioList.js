import Stock from './Portfolio.js';

const PortfolioList = ({stocks}) => {
    const portfolioInfo = stocks.map(stock => {
        return (
        <Stock 
        key = {stock._id}
        stock ={stock} />)
    });

    return (
        <>
        {portfolioInfo}
        </>
    );
}


export default PortfolioList;