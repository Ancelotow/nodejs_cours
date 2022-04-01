export default {
    get: {
        tags: ["products"],
        description: "Récupère tout les produits",
        operationId: "products.GetAll",
        parameters: [],
        responses: {
            200: {
                description: "Liste de tout les produits",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/products",
                        },
                    },
                },
            },
        },
    },
};