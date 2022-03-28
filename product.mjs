const products = []

class Product {
    name = ""
    qty = 0

    constructor(_name, _qty) {
        this.name = _name
        this.qty = _qty
    }
}

const add = (product = new Product()) => {
    if(getByName(product.name)) {
        throw new Error("Product already exists.")
    } else {
        products.push(product)
        console.log('Product ', product.name, ' has been added !')
    }
};

const addAsync = (product = new Product()) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                add(product)
                resolve()
            } catch (e) {
                reject(e)
            }
        }, 1000)
    });
};

const getAll = () => {
    products.forEach(prd => console.log(prd.name, ' : ', prd.qty))
};

const getByName = (name = "") => {
    return products.find(prd => prd.name === name)
};

const update = (name, qty) => {
    let product = getByName(name);
    if(product){
        product.qty = qty
    } else {
        throw new Error("Not found product.")
    }
};

const remove = (name, qty) => {
    let product = getByName(name);
    if(product){
        product.qty -= qty
        if(product.qty <= 0) {
            let index = products.indexOf(product)
            products.splice(index, 1)
        }
    } else {
        throw new Error("Not found product.")
    }
};

export { add, getAll, addAsync, getByName, update, remove, Product };


