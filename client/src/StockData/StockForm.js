import React from 'react';

const StockForm = ({symbol, name, price, onPurchase}) =>{

    console.log("in stockform: " + name)

    const handleSubmit = (ev) => {
        const volume = ev.target.value;
        onPurchase(symbol, name, price, volume);
    }

    return(
        <form>

            <label for="symbol">Symbol</label>
            <input type="text" id="symbol" name="symbol" value={symbol}/>

            <label for="name">Name</label>
            <input type="text" id="name" name="name" value={name} />

            <label for="price">Price</label>
            <input type="text" id="price" name="price" value={price}/>

            <label for="volume">Volume</label>
            <input 
                type="number" 
                id="volume" 
                name="volume" 
                placeholder="number of shares" 
                autofocus 
                required />

            <input
                type="submit"
                value="Buy"
                onSubmit={handleSubmit}
            />

        </form>
    )};
    
export default StockForm; 