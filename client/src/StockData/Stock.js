const Stock = ({symbol, name, price, change}) =>{
    
    const handleClick = () => {
        console.log("we are in stock - click!"+ symbol)
      
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