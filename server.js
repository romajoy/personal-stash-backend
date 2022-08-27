const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const cors = require('cors')


// JSON Middleware
app.use(express.json())
app.use(cors())

// Routing Controllers
const yarnController = require('./controllers/yarncontroller.js')
app.use(yarnController)

const hookController = require('./controllers/hookcontroller.js')
app.use(hookController)

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/stash')
mongoose.connection.once('open', () => {
    console.log('connected to mongod!')
})

// Listening
app.listen(3000, () => {
    console.log('lisening...')
})