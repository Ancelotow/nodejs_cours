import { GetAll, GetByName, Add, Remove } from "./product.mjs"
import { auth } from "./controllers/auth/index.mjs"
import express from "express"
import bodyParser from "body-parser"

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router()

/**
 * Get all products
 */
router.get("/products", (req, res) => {
  res.status(200).send(GetAll())
})

/**
 * Get one specific product
 */
router.get("/products/:name", (req, res) => {
  res.status(200).send(GetByName(req.params.name))
})

/**
 * Add new product if not exists
 */
router.post("/products", jsonParser, (req, res) => {
  try {
    Add(req.body.name, req.body.quantity)
    res.status(201).send(req.body)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

/**
 * Delete product or remove quantity from product
 */
router.delete("/products/:name", (req, res) => {
  try {
    if (req.query.quantity) {
      Remove(req.params.name, req.query.quantity)
      res.send("Quantity has been removed")
    } else {
      res.statusCode = 400
      res.send("Missing parameter 'quantity'")
    }
  } catch (e) {
    res.statusCode = 400
    res.send(e.message)
  }
})

/**
 * Authentification
 */
router.post("/auth", (req, res) => {
  const token = auth(req.body.name, req.body.password)
  if(token) {
    res.status(200).send(token)
  } else {
    res.status(401).send("Access refused")
  }
})

export { router }