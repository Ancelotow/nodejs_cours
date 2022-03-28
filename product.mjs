const products = []

const add = (product = "") => {
    setTimeout(() => {
        products.push(product)
        console.log('Le produit ', product, ' à été ajouté.')
    }, 1000)
};

const addAsync = async (product = "") => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            products.push(product)
            console.log('Le produit ', product, ' à été ajouté.')
            resolve()
        }, 1000)
    });
};

const getAll = () => {
    products.forEach(prd => console.log(prd))
};

export { add, getAll, addAsync };


