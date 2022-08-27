//Dependencies
const express = require('express');
const router = express.Router();

//Models
const Hook = require('../models/hooks.js');



////Routes
//Create
router.post('/',(req,res) => {
  Hook.create(req.body,(err,createdHook) => {
    res.json(createdHook)
  });
});

//Get
router.get('/', (req,res) => {
  Hook.find({},(err,foundHooks) => {
    res.json(foundHooks)
  });
});

//Delete
router.delete('/:id',(req,res) => {
  Hook.findByIdAndRemove(req.params.id,(err,deletedHook) => {
    res.json(deletedHook)
  });
});

//Edit
router.put('/:id',(req,res) => {
  Hook.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedHook) => {
    res.json(updatedHook)
  });
});

//Export Controller
module.exports = router;