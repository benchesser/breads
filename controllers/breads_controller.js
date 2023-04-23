const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads.js')

//INDEX - READ ALL
breads.get('/', (req,res) => {
    res.send(Bread);
});

//READ ONE
breads.get('/:arrayIndex', (req, res) => {
    const arrayIndex = req.params.arrayIndex;
    res.send(Bread[arrayIndex]);
});

module.exports = breads;