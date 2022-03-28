import { add, getAll, addAsync } from "./product.mjs";

const arr = []
arr.push(addAsync("Coca Cola"))
arr.push(addAsync("Fanta"))
arr.push(addAsync("Sprite"))
Promise.all(arr).then(() => {
    getAll()
})

