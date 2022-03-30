import {router} from './routes.mjs'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const app = express();

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

// Ceci permet d'afficher les logs d'appel dans la console
// exemple quand POST /products est appelé : POST /products 400  -  3.798 ms
app.use(morgan('dev'))
app.use(router)

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})


