export default {
    get: {
        tags: ["products"],
        description: "Récupère un produit",
        operationId: "products.GetByName",
        parameters: [
            {
                name: "name",
                in: "path",
                schemas: {
                    type: "string",
                    description: "Nom du produit",
                    example: "Coca-Cola"
                },
                required: true,
                description: "Nom du produit",
            },
        ],
        responses: {
            200: {
                description: "Le produit",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/product",
                        },
                    },
                },
            },
            400: {
                description: "Le produit n'éxiste pas",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "Not found product"
                        },
                    },
                },
            },
        },
    },
};