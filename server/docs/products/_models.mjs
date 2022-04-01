export default  {
    product: {
        type: "object",
        properties: {
            name: {
                type: "string",
                description: "Nom du produit",
                example: "Coca-Cola"
            },
            quantity: {
                type: "number",
                description: "Quantité du produit",
                example: 2
            },
        },
    },
    products: {
        type: "object",
        additionalProperties: { $ref: '#/components/schemas/product' },
    },
};
