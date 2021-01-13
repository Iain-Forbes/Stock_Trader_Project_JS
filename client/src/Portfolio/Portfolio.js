import {stock} from "../Services/PortfolioService";

const Portfolio = ({stock}) => {
        

    return (
        <> 
        <table id="portfolioData" >
            <tr>
                <th>Symbol:</th>
                <td>{stock.symbol}</td>
            </tr>
            <tr>
                <th>Name:</th>
                <td>{stock.name}</td>
            </tr>
            <tr>
                <th>Price:</th>
                <td>{stock.price}</td>
            </tr>
            <tr>
                <th>Volume:</th>
                <td>{stock.volume}</td>
            </tr>

        </table>
        </>
       
    )
}


export default Portfolio;