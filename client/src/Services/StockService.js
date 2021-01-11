const baseURL = 'http://localhost:3000/api/positions/'

export const getPortfolio = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

// Ask server to return details for a single stock - non-historical 
// data - this will be a request from the search form. Not sure if
// I need to specify a 'GET', or whether that is automatically assumed.
export const getSearchStock = (id) => {
    return fetch(baseURL + id, {
        // method: 'GET'
    })
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