const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        server.use('/public', express.static(__dirname + '/public'));

        server.get('*', (req, res) => {
            // req.url = req.url.replace('/client', '');
            return handle(req, res)
        })
        server.listen(8081, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:8081')
        })
    })
