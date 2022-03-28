import * as http from 'http'

const port = 3000
const host = '127.0.0.1'

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.write("Hello World ! first\n")
    response.end('Hello World ! second')
});

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})


