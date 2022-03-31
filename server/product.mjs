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

/**
 * Ajoute une nouveau produit
 * @param name Le nom du produit
 * @param qty La quantité du produit
 * @exception Le produit éxiste déjà
 * @constructor
 */
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

/**
 * Récupère tout les produits
 * @returns {[]|any} La liste des produits
 * @constructor
 */
const GetAll = () => {
    products = ReadFile()
    return products
};

/**
 * Retourne un produit à partir de son nom
 * @param name Nom du produit
 * @returns {T} Le produit recherché. NULL s'il n'éxiste pas
 * @constructor
 */
const GetByName = (name = "") => {
    products = ReadFile()
    return products.find(prd => prd.name === name)
};

/**
 * Modifie la quantité d'un produit
 * @param name Nom du produit à modifier
 * @param qty La nouvelle quantité
 * @exception Le produit n'éxiste pas
 * @constructor
 */
const Update = (name, qty) => {
    let product = GetByName(name);
    if (product) {
        product.quantity = qty
        WriteFile()
    } else {
        throw new Error("Not found product.")
    }
};

/**
 * Supprime une quantité donné d'un produit. Si la quantité est à 0, le produit est supprimé
 * @param name Nom du produit à modifié
 * @param qty Quantité à supprimer
 * @exception Le produit n'éxiste pas
 * @constructor
 */
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

/**
 * Modifie le fichier JSON qui contient la liste des produits
 * @constructor
 */
const WriteFile = () => {
    file.writeFileSync(filename, JSON.stringify(products))
}

/**
 * Lis le fichier JSONqui contient la liste des produits
 * @returns {*[]|any} La liste des produits
 * @constructor
 */
const ReadFile = () => {
    let data = file.readFileSync(filename, 'utf8');
    if (data === "") {
        return []
    }
    return JSON.parse(data)
}

export {Add, GetAll, GetByName, Update, Remove, Product};


