import {GetAll, GetByName, Add, Remove} from './product.mjs'
import express from 'express'
import bodyParser from 'body-parser'

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

/**
 * Get all products
 */
router.get('/products', (req, res) => {
    res.send(GetAll())
});

/**
 * Get one specific product
 */
router.get('/products/:name', (req, res) => {
    res.send(GetByName(req.params.name))
});

/**
 * Add new product if not exists
 */
router.post('/products', jsonParser, (req, res) => {
    try {
        Add(req.body.name, req.body.quantity)
        res.statusCode = 201
        res.send(req.body)
    } catch (e) {
        res.statusCode = 400
        res.send(e.message)
    }
});

/**
 * Delete product or remove quantity from product
 */
router.delete('/products/:name', (req, res) => {
    try {
        if(req.query.quantity) {
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
});

export {router};
