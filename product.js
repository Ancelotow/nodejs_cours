const products = []

module.exports = {

    add: function (product = "") {
        products.push(product)
    },

    getAll: function () {
        products.forEach(prd => console.log(prd))
    },

};


