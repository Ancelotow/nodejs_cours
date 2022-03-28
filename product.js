const products = []

const add = (product = "") => {
    products.push(product)
};

const getAll = () => {
    products.forEach(prd => console.log(prd))
};

export { add, getAll };


