import {stock, deleteStock} from "../Services/PortfolioService";
import {redirect} from 'react'

const Portfolio = ({stock}) => {
        

    return (
        <> 
        <table className="portfolio-data" >
            <tr>
                <th> Symbol</th>
                <th> Name</th>
                <th> Price</th>
                <th> Number of Shares</th>  
            </tr>
            <tr>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>{stock.price}</td>
                <td>{stock.volume}</td>
                
                <button className="delete-button" onClick={()=>deleteStock(stock._id).then(() => window.location.reload() )}> 🗑 </button>
            </tr>
        </table>
        </>
       
    )
}


export default Portfolio;