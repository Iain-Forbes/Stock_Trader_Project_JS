import {addStock} from "../Services/PortfolioService";

const Portfolio = ({stock}) => {
        

    return (
        <> 
        <table id="portfolioData" >
            <tr>
                <th>Symbol/Code:</th>
                <td>{stock.code}</td>
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
                <th>Change:</th>
                <td>{stock.change}</td>
            </tr>
        </table>
        <div>
            <button>Add to Portfolio</button>
        </div>
        </>
       
    )
}


export default Portfolio;