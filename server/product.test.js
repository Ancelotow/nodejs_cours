import {GetAll} from './product.mjs'
import prod from './products.json'

/**
 * Tests de la récupération de tout les produits
 */
describe("Tests de la récupération de tout les produits", () => {
    test("GetAll()", ()=> expect(GetAll()).toMatchObject(prod));
});