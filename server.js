const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const cors = require('cors')
require('dotenv').config()


const db = mongoose.connection
const MONGODB_URI = process.env.MONGODB_URI
// Connect to Mongo

mongoose.connect(MONGODB_URI, () => {
    console.log('whatever')
})

const PORT = process.env.PORT || 3003;

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// JSON Middleware
app.use(express.json())
app.use(cors())

console.log(process.env)

// Routing Controllers
const yarnController = require('./controllers/yarncontroller.js')
app.use('/yarn', yarnController)

const hookController = require('./controllers/hookcontroller.js')
app.use('/hooks', hookController)


// Listening
app.listen(PORT, () => {
    console.log('lisening...')
})