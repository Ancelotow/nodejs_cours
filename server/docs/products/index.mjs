import schema from "./_models.mjs"
import getAll from "./getAll.mjs";
import add from "./add.mjs"
import remove from "./remove.mjs"
import getByName from "./getByName.mjs";

export default  {
    paths: {
        "/products" : {
            ...getAll,
            ...add,
        },
        "/products/{name}" : {
            ...remove,
            ...getByName,
        }
    },
    schema : {
        ...schema,
    },
};
