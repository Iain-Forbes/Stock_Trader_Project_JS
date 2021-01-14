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
<<<<<<< HEAD
            

                <td><button onClick={()=>deleteStock(stock._id).then(() => window.location.reload() )}> $ </button></td>
=======
<<<<<<< HEAD
                
                <button className="delete-button" onClick={()=>deleteStock(stock._id).then(() => window.location.reload() )}> 🗑 </button>
=======

                <td><button onClick={()=>deleteStock(stock._id).then(() => window.location.reload() )}> 🗑 </button></td>
>>>>>>> 7f32b5622b65038d5d9f852c89746b36c36b54e0
>>>>>>> 6af304ffd7e66370e02f39eab8221f91a6e74ced
            </tr>
        </table>
        </>
       
    )
}


export default Portfolio;