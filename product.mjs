import file from "fs"

let products = []
const filename = "products.json"

class Product {
    name = ""
    quantity = 0

    constructor(_name, _qty) {
        this.name = _name
        this.quantity = _qty
    }
}

const Add = (name, qty) => {
    products = ReadFile()
    if (GetByName(name)) {
        throw new Error("Product already exists.")
    } else {
        products.push(new Product(name, qty))
        WriteFile()
        console.log(`Product ${name} has been added !`)
    }
}

const GetAll = () => {
    products = ReadFile()
    return products
};

const GetByName = (name = "") => {
    products = ReadFile()
    return products.find(prd => prd.name === name)
};

const Update = (name, qty) => {
    let product = GetByName(name);
    if (product) {
        product.quantity = qty
        WriteFile()
    } else {
        throw new Error("Not found product.")
    }
};

const Remove = (name, qty = 0) => {
    let product = GetByName(name);
    if (product) {
        product.quantity -= (qty <= 0) ? product.quantity : qty
        if (product.quantity <= 0) {
            let index = products.indexOf(product)
            products.splice(index, 1)
        }
        WriteFile()
    } else {
        throw new Error("Not found product.")
    }
};

const WriteFile = () => {
    file.writeFileSync(filename, JSON.stringify(products))
}

const ReadFile = () => {
    let data = file.readFileSync(filename, 'utf8');
    if (data === "") {
        return []
    }
    return JSON.parse(data)
}

export {Add, GetAll, GetByName, Update, Remove, Product};


