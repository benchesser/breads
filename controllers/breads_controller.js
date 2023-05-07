const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads.js');
const Baker = require('../models/baker.js');

//INDEX - READ ALL
breads.get('/', (req,res) => {
    Bread.find().then((foundBreads) => {
        res.render('index', {
            breads: foundBreads,
            title: 'Index page',
        });
    });
});

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})


breads.get('/new', (req, res) => {
    Baker.find().then((foundBakers) => {
        res.render('new', {bakers: foundBakers})
    });
});

//EDIT
breads.get('/:id/edit', (req, res) => {
    const id = req.params.id;

    Baker.find().then((foundBakers) => {
        Bread.findById(id).then(foundBread => {
            res.render('edit', {
                bread: foundBread,
                bakers: foundBakers,
            });
        });
    });
});

//READ ONE -- SHOW
breads.get('/:id', (req, res) => {
    const id = req.params.id;
    Bread.findById(id)
        .populate('baker')
        .then((foundBread) => {
            
            res.render('show', {
            bread: foundBread,
            });
        })
        .catch((err) => {
        res.send('404');
        });
});

//CREATE
breads.post('/', (req, res) => {
    let newBread = { ...req.body };
    if (newBread.hasGluten === 'on') {
        newBread.hasGluten = true;
    } else if (newBread.hasGluten === 'off') {
        newBread.hasGluten = false;
    } else {
        console.error("error");
    };
    Bread.push(newBread);
    res.redirect('/breads');
});

//UPDATE
breads.put('/:id', (req, res) => {
    const id = req.params.id;
    
    let updateBread = {...req.body};
    //dedfault bread img
    if (updateBread.image === '') {
        updateBread.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    };
    //Process hasGluten
    if (updateBread.hasGluten === 'on') {
        updateBread.hasGluten = true;
    } else {
        updateBread.hasGluten = false;
    };
    Bread.findByIdAndUpdate(id, updateBread, {new: true})
        .then(updatedBread => {
            console.log(updatedBread);
            res.redirect(`/breads/${id}`);
        });
});

//DELETE
breads.delete('/:id', (req, res) => {
    const id = req.params.id;
    Bread.findByIdAndDelete(id).then(deletedBread => {
        res.status(303).redirect('/breads');
    });
});

module.exports = breads;