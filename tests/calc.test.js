import {Add, Subtract, Multiply} from "./calc";

describe("Test des additions", () => {
    test("Addition de 1 + 1", ()=> expect(Add(1, 1)).toEqual(2));
    test("Addition de 5 + 0", ()=> expect(Add(5, 0)).toEqual(5));
    test("Addition de 20 + 45", ()=> expect(Add(20, 45)).toEqual(65));
});

describe("Test des Multiplications", () => {
    test("Addition de 1 * 2", ()=> expect(Multiply(1, 2)).toEqual(2));
    test("Addition de 5 * 0", ()=> expect(Multiply(5, 0)).toEqual(0));
    test("Addition de 20 * 45", ()=> expect(Multiply(20, 45)).toEqual(900));
});

describe("Test des Soustractions", () => {
    test("Addition de 1 - 2", ()=> expect(Subtract(1, 2)).toEqual(-1));
    test("Addition de 5 - 0", ()=> expect(Subtract(5, 0)).toEqual(5));
    test("Addition de 45 - 20", ()=> expect(Subtract(45, 20)).toEqual(25));
});