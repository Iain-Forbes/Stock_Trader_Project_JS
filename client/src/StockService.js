const baseURL = 'http://localhost:3000/api/stocks/'

const StockService = {

getStocks() {
    return fetch(baseURL)
    .then(res => res.json())
},

postStock(stock) {
    return fetch(baseURL, {
        method: 'POST', 
        body: JSON.stringify(stock),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
},

deleteStock(id) {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
},

updateStock(stock) {
    return fetch(baseURL + stock._id, {
        method: 'PUT', 
        body:JSON.stringify(stock),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
}
};

export default StockService;