'use strict'

const path = require('path')
const express = require('express')
const api = require('./api')
const bodyParser = require('body-parser')
const port = 3001
const host = 'localhost'

const app = express()
app.use(bodyParser.json())
app.use('/api', api)
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, host, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Listening at http://'+host+':' + port)
})
