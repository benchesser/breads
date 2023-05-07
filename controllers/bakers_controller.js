const express = require('express');
const Baker = require('../models/baker');

const bakerSeedData = require('../models/baker_seed');

const bakers = express.Router();

// ONE-TIME BAKER SEED DATA
bakers.get('/data/seed', (req, res) => {
    //Baker.insertMany(bakerSeedData).then(res.redirect('/breads'))
    res.redirect('/breads');
});

//INDEX -- READ ALL
bakers.get('/', (req, res) => {
    Baker.find()
    .populate('breads')
    .then((foundBakers) => {
        res.send(foundBakers);
    });
})

// DETIAL - Show
bakers.get('/:id', (req, res) => {
    const id = req.params.id;
    Baker.findById(id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker,
            });
        });
});


module.exports = bakers