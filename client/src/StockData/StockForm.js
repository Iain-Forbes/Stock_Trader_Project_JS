import React from 'react';

const StockForm = (symbol, name, price) =>{

    console.log("in stockform: " + name)

    return(
        <form>

            <label for="symbol">Symbol</label>
            <input type="text" id="symbol" name="symbol" value={symbol}/>

            <label for="name">Name</label>
            <input type="text" id="name" name="name" />

            <label for="price">Price</label>
            <input type="text" id="price" name="price" />

            <label for="volume">Volume</label>
            <input type="number" id="volume" name="volume" />

            <input
                type="submit"
                value="submit"
            />


        </form>
    )

}
export default StockForm; 