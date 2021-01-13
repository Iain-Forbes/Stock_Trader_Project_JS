const Stock = ({symbol, name, price, change, onStockSelected}) =>{
    
    const handleClick = () => {
        console.log("we are in stock - click!"+ symbol)
        onStockSelected(symbol, name, price);
      
    }
    
    return(
        <tr key={symbol} className="index-row" onClick={handleClick}>
            <td>{symbol}</td> 
            <td>{name}</td> 
            <td>{price}</td> 
            <td>{change}</td>
        </tr>
        )

} 

export default Stock