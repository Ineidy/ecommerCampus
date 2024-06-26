import { headers } from "../components/env.js";

export const getProductId = async({id: idCategory}) => {
    console.log("Esperando..........");
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${idCategory}&country=US`
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url,options);
    let data = res.json();
    return data;
}
export const getProductsBuy = async()=>{
    let products =[];
    Object.keys(localStorage).forEach(keys => {
        products.push(JSON.parse(localStorage.getItem(keys)))
    })
    return products;
}
