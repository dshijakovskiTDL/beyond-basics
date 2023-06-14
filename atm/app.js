// * Express - npm package for building servers in Node.js https://expressjs.com/
import express from 'express'

// ? We first need to create a server instance and a port number to listen to
const server = express()
const PORT = 3000

// ? To start up the server - we can call the method listen()
// ? We are not listening for requests at http://localhost:3000
server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})

// * Listen for GET requests
server.get('/', (request, response) => {
    response.json({ message: 'Hi there!' })
})
