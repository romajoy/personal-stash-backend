const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const Yarn = require('./models/yarn.js')
const Hook = require('./models/hooks.js')

app.use(express.json())

app.post('/yarn', (req,res) => {
    Yarn.create(req.body, (err, createdYarn) => {
        res.json(createdYarn)
    })
})

app.get('/yarn', (req, res) => {
    Yarn.find({}, (err, foundYarn) => {
        res.json(foundYarn)
    })
})





mongoose.connect('mongodb://localhost:27017/stash')
mongoose.connection.once('open', () => {
    console.log('connected to mongod!')
})

app.listen(3000, () => {
    console.log('lisening...')
})