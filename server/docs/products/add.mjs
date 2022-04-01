export default {
    post: {
        tags: ["products"],
        description: "Ajoute un nouveau produits",
        operationId: "products.Add",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/product",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Ajout du produit réusi",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/product",
                        },
                    },
                },
            },
            400 : {
                description: "Le produit éxiste déjà",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "Already exixts"
                        },
                    },
                },
            },
        },
    },
};