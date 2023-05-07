const express = require('express');
const Baker = require('../models/baker');

const bakerSeedData = require('../models/baker_seed');

const bakers = express.Router();

// ONE-TIME BAKER SEED DATA
bakers.get('/data/seed', (req, res) => {
    //Baker.insertMany(bakerSeedData).then(res.redirect('/breads'))
    res.redirect('/breads');
});

module.exports = bakers