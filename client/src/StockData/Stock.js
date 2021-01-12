const Stock = ({title, name, price, change}) =>{
    return(
        <tr>
            <td>{title}</td> 
            <td>{name}</td> 
            <td>{price}</td> 
            <td>{change}</td>
        </tr>
        )

} 

export default Stock