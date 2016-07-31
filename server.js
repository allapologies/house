const path = require('path');
const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

const app = express()
app.use(bodyParser.json())
app.use('/api', api)
app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.listen(port)
console.log("Server started")