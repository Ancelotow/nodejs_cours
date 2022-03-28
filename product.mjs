const products = []

class Product {
    name = ""
    qty = 0

    constructor(_name, _qty) {
        this.name = _name
        this.qty = _qty
    }
}

const Add = (name, qty) => {
    if(GetByName(name)) {
        throw new Error("Product already exists.")
    } else {
        products.push(new Product(name, qty))
        console.log('Product ', name, ' has been added !')
    }
}

const GetAll = () => {
    products.forEach(prd => console.log(prd.name, ' : ', prd.qty))
};

const GetByName = (name = "") => {
    return products.find(prd => prd.name === name)
};

const Update = (name, qty) => {
    let product = GetByName(name);
    if(product){
        product.qty = qty
    } else {
        throw new Error("Not found product.")
    }
};

const Remove = (name, qty) => {
    let product = GetByName(name);
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

export { Add, GetAll, GetByName, Update, Remove, Product };


