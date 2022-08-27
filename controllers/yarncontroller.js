
const express = require('express')
const router = express.Router()
const Yarn = require('../models/yarn.js')

// Create Route for Yarn
router.post('/', (req, res) => {
    Yarn.create(req.body, (err, createdYarn) => {
        res.json(createdYarn)
    })
})

// Index Route for Yarn
router.get('/', (req, res) => {
    Yarn.find({}, (err, foundYarn) => {
        res.json(foundYarn)
    })
})

// Delete Route for Yarn
router.delete('/:id', (req, res) => {
    Yarn.findByIdAndRemove(req.params.id, (err, deletedYarn) => {
        res.json(deletedYarn)
    })
})

// Update Route for Yarn
router.put('/:id', (req, res) => {
    Yarn.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedYarn) => {
        res.json(updatedYarn)
    })
})


module.exports = router