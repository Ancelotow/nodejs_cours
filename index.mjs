import { GetAll, Add, Update, Remove, Product } from "./product.mjs";

// Test ajout
try{
    Add("Coca Cola", 9)
    Add("Sprite", 10)
    Add("Fanta", 34)
    Add("Fanta", 9)
} catch(error) {
    console.error(error.message);
} finally {
    GetAll()
}

// Test modification
try{
    Update("Sprite", 4)
    Update("ds", 4)
} catch (error) {
    console.error(error.message)
} finally {
    GetAll()

}

// Test suppression
try{
    Remove("Sprite", 4)
    Remove("Fanta", 10)
    Remove("ds", 4)
} catch (error) {
    console.error(error.message)
} finally {
    GetAll()

}


