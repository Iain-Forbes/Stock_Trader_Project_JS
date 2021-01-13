
const Portfolio = ({stock}) => {
    console.log(stock);

    return (
        <> 
        <table id="portfolioData" >
            <tr>
                <th>Symbol:</th>
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
                <th>Number of Shares:</th>
                <td>{stock.volume}</td>
            </tr>

        </table>
        </>
       
    )
}


export default Portfolio;