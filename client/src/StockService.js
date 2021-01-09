const baseURL = 'http://localhost:3000/api/stocks/'

const StocksService = {

getStocks() {
    return fetch(baseURL)
    .then(res => res.json())
},

postStock(payload) {
    return fetch(baseURL, {
        method: 'POST', 
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
},

deleteStock(id) {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
}

export default StocksService;