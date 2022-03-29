import * as http from 'http'
import { GetAll, GetByName } from './product.mjs'

const port = 3000
const host = '127.0.0.1'

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    if(request.url === '/products') {
        response.write(JSON.stringify(GetAll()))
    } else {
        let splitResult = request.url.split("/");
        if(splitResult.length >= 3) {
            let name = splitResult[2];
            name = name.replaceAll("%20", " ")
            let product = JSON.stringify(GetByName(name));
            if(product) {
                response.write(product)
            } else {
                response.statusCode = 404;
                response.write("Not found product.")
            }
        } else {
            response.statusCode = 404;
            response.write("Not found requests.")
        }
    }
    response.end()
});

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})


