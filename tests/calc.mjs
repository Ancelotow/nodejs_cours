/**
 * Addition a avec b
 * @param a
 * @param b
 * @returns {number} La somme de a et b
 * @constructor
 */
const Add = (a, b) => {
    return a + b
}

/**
 * Soustrait a par b
 * @param a
 * @param b
 * @returns {number} La différence entre a et b
 * @constructor
 */
const Subtract = (a, b) => {
    return a - b
}

/**
 * Multiplie a avec b
 * @param a
 * @param b
 * @returns {number} Le quotient de a par b
 * @constructor
 */
const Multiply = (a, b) => {
    return a * b
}

export {Add, Subtract, Multiply};
