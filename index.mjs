import { getAll, addAsync, update, remove, Product } from "./product.mjs";

const arr = []
arr.push(addAsync(new Product("Coca Cola", 9)))
arr.push(addAsync(new Product("Sprite", 10)))
arr.push(addAsync(new Product("Fanta", 34)))
arr.push(addAsync(new Product("Fanta", 9)))

// Test ajout
try{
    await Promise.all(arr);
} catch(error) {
    console.error(error.message);
} finally {
    getAll()
}

// Test modification
try{
    update("Sprite", 4)
    update("ds", 4)
} catch (error) {
    console.error(error.message)
} finally {
    getAll()

}

// Test suppression
try{
    remove("Sprite", 4)
    remove("Fanta", 10)
    remove("ds", 4)
} catch (error) {
    console.error(error.message)
} finally {
    getAll()

}


