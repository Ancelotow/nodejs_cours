import {GetAll, GetByName, Add, Product} from './product.mjs'
import express from 'express';
const router = express.Router();

router.get('/products', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(GetAll())
});

router.get('/products/:name', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(GetByName(req.params.name))
});

router.post('/products', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    try {
        Add(req.body.name, req.body.quantity)
        res.statusCode = 201
        res.send(req.body)
    } catch (e) {
        res.statusCode = 400
        res.send(e.message)
    }
});

export {router};
