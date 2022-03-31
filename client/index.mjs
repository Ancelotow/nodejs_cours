import axios from 'axios'
import * as url from "url";

const urlApi = 'https://esgi-api-nodejs.herokuapp.com/products';

/**
 * Récupère la liste de tout les produits
 */
const getProducts = () => {
    return new Promise((resolve, _) => {
        axios.get(urlApi).then((res) => {
            resolve(res.data)
        });
    });
};

/**
 * Ajoute un nouveau produit
 */
const addProduct = (name, quantity) => {
    const product = { "name" : name, "quantity" : quantity}
    return new Promise((resolve, _) => {
        axios.post(urlApi, product).then((res) => {
            if(res.status === 201) {
                resolve(JSON.stringify(res.data))
            } else {
                resolve("Error : ", JSON.stringify(res.data))
            }
        }).catch((err) => {
            resolve(err.response.data)
        })
    });
};

/**
 * Récupère la liste de tout les produits de manière asynchrone
 */
const getProductsAsync = async () => {
    let res = await axios.get(urlApi)
    return res.data
};

/**
 * IIFE (Immediately Invoked Function Expression)
 */
(async () => {

    getProducts().then(res => console.log("# getProducts() : ", res));
    addProduct("Star Citizen : Test", 24).then(res => console.log("# addProduct() : ", res));
    console.log("# getProductsAsync() : ", await getProductsAsync());

})();