import {addStock} from "../Services/PortfolioService";

const Portfolio = ({stock, addStock}) => {
    console.log(stock);

    //unsure what we need in here addStock/updateStock etc? 

    // const handleAdd = () => {
    //     addStock(stock._id)
    //     .then(() => {
    //         buyStock(stock._id);
    //     })
    // }

    return (
        <> 
        <tr>
            
        </tr>
            <p>{stock.code}</p>
            <p>Name: {stock.name}</p>
            <p>Price: {stock.price}</p>
            <p>Change: {stock.change}</p>
            <button>Add to Portfolio</button>
        </>
    )
}


export default Portfolio;