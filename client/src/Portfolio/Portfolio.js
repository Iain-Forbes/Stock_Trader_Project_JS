import {stock, deleteStock} from "../Services/PortfolioService";

const Portfolio = ({stock}) => {
        

    return (
        <> 
        <table className="portfolio-data" >
            <tr>
                <th> Symbol</th>
                <th> Name</th>
                <th> Price</th>
                <th> Number of Shares</th>
                <th> Sell Shares</th>
            </tr>
            <tr>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>{stock.price}</td>
                <td>{stock.volume}</td>
            

                <td><button onClick={()=>deleteStock(stock._id).then(() => window.location.reload() )}> $ </button></td>
            </tr>
        </table>
        </>
       
    )
}


export default Portfolio;