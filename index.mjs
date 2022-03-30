import * as http from 'http'
import {router} from './routes.mjs'
import express from 'express';
const app = express();

const port = 3000
const host = '127.0.0.1'

app.use(express.json({extended: false}));
app.use(router)

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})


