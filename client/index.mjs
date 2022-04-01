import axios from 'axios'

const urlApi = 'https://esgi-api-nodejs.herokuapp.com/products'

/**
 * Récupère la liste de tout les produits
 * @returns {Promise<[{name, quantity}]>} La liste des produits
 */
function getProducts() {
    return new Promise((resolve, _) => {
        axios.get(urlApi).then((res) => {
            resolve(res.data)
        })
    })
}

/**
 * Ajoute un nouveau produit
 * @param name Le nom
 * @param quantity La quantité
 * @returns {Promise<string | {name, quantity}>} La réponse de l'API (201: ajouter, 400: éxiste déjà)
 */
function addProduct(name, quantity){
    const product = { name, quantity: quantity}
    return new Promise((resolve, _) => {
        axios.post(urlApi, product).then((res) => {
            if (res.status === 201) {
                resolve(res.data)
            } else {
                resolve('Error : ', JSON.stringify(res.data))
            }
        }).catch((err) => {
            resolve(err.response.data)
        })
    })
}

/**
 * Récupère la liste de tout les produits de manière asynchrone
 * @returns {Promise<[{name, quantity}]>} La liste des produits
 */
async function getProductsAsync() {
    let res = await axios.get(urlApi)
    return res.data
}

/**
 * IIFE (Immediately Invoked Function Expression)
 */
(async () => {

    console.log('# getProducts() : ', await getProducts())
    console.log('# addProduct() : ', await addProduct('MacBook Pro 16\' 16Go', 76))
    console.log('# getProductsAsync() : ', await getProductsAsync())

})()