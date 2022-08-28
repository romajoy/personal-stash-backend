const mongoose = require('mongoose')

const yarnSchema = new mongoose.Schema({
    brand: String,
    name: String,
    color: String,
    yards: Number,
    weight: String,
    purchaseDate: Date,
    skeins: Number,
    store: String,
    note: String,
    image: String,
})

const Yarn = mongoose.model('Yarn', yarnSchema)
module.exports = Yarn