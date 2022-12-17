const axios = require('axios')

function getProducts(){
    return axios.get('http://localhost:8082/')
}

function createProduct(){
    return axios.post('http://localhost:8082/',{
        title:"Lapiz",
        price:120,
        thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle…"
    })
}

Promise.all([
    getProducts(),
    createProduct()
]).then(results=>{
    results.forEach(product=>{
        console.log(product.data)
    })
})