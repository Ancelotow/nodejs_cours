import products from "./products/index.mjs";

export default {
    openapi: "3.0.1",
    info: {
        version: "1.0.0",
        title: "NodeJS Cours ESGI",
        description: "API en NodeJS dans le cadre d'un cours à l'ESGI",
        contact: {
            name: "ESGI",
            email: "oancelot1@myges.fr",
            url: "https://esgi.fr",
        },
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Local server",
        },
        {
            url: "https://esgi-api-nodejs.herokuapp.com",
            description: "Heroku server",
        },
    ],
    paths: {
        ...products.paths,
    },
    components: {
        schemas: {
            ...products.schema,
        },
    },
};