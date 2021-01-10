const baseURL = 'http://localhost:3000/api/stocks/'

export const getStocks = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const addStock = (stock) => {
    return fetch(baseURL, {
        method: 'POST', 
        body: JSON.stringify(stock),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteStock = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateStock = (stock) => {
    return fetch(baseURL + stock._id, {
        method: 'PUT', 
        body:JSON.stringify(stock),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
}