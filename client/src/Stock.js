import StockService from "./StockService";

const Stock = (stock) => {
    console.log(stock);

    //const handleAdd = () => {
        // StockService.addStock(stock._id)
        // .then(() => {
        //     buyStock(stock._id);
        })
    }

    return (
        <>
            <p>{stock.code}</p>
            <p>{stock.name}</p>
            <p>{stock.price}</p>
            <p>{stock.change}</p>
            <button>Add to Portfolio</button>
        </>
    )
}


export default Stock;