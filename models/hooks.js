const mongoose = require('mongoose')

const hookSchema = new mongoose.Schema ({
// Applies to Hooks and Needles
    size: String,
    brand: String,
    material: String,
    inUse: Boolean,
    project: String,
    notes: String,
    favorite: Boolean,
    replace: Boolean, //needs replacing soon
// Needle-specific
    style: String, // circular, straight, dpn, etc.
    long: String, // 16"
    point: String, // ex. lace-point, etc.
    completeSet: Boolean, // for DPN's
    image: String
})

const Hooks = mongoose.model('Hooks', hookSchema)
module.exports = Hooks