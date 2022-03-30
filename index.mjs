import {router} from './routes.mjs'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express();

const port = 3000
const host = '127.0.0.1'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

// Ceci permet d'afficher les logs d'appel dans la console
// exemple quand POST /products est appelé : POST /products 400  -  3.798 ms
app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        ' - ',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
}))
app.use(router)

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})


