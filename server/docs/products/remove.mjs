export default {
    delete: {
        tags: ["products"],
        description: "Supprime d'un produit une quantité donné. Si la quantité est à 0, le produit est supprimé",
        operationId: "products.Remove",
        parameters: [
            {
                name: "name",
                in: "path",
                schema: {
                    type: "string",
                    example: "Coca-Cola"
                },
                required: true,
                description: "Nom du produit",
            },
            {
                name: "quantity",
                in: "query",
                schema: {
                    type: "number",
                    example: 5
                },
                required: true,
                description: "Quantité à supprimer",
            },
        ],
        responses: {
            200: {
                description: "La quantité a bien été supprimé",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "Not found product"
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