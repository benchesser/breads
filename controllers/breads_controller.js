const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads.js')

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
    res.render('new')
});

//EDIT
breads.get('/:arrayIndex/edit', (req, res) => {
    const arrayIndex = req.params.arrayIndex;
    res.render('edit', {
        bread: Bread[arrayIndex],
        index: arrayIndex,
    });
});

//READ ONE -- SHOW
breads.get('/:id', (req, res) => {
    const id = req.params.id;
    Bread.findById(id)
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
breads.put('/:arrayIndex', (req, res) => {
    const arrayIndex = req.params.arrayIndex
    
    let updatedBread = {...req.body};
    //dedfault bread img
    if (updatedBread.image === '') {
        updatedBread.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    };
    //Process hasGluten
    if (updatedBread.hasGluten === 'on') {
        updatedBread.hasGluten = true;
    } else if (updatedBread.hasGluten === 'off') {
        updatedBread.hasGluten = false
    } else {
        console.error('Error: hasGluten value is:', updatedBread.hasGluten);
    }
    Bread[arrayIndex] = updatedBread;
    res.redirect(`/breads/${arrayIndex}`);
});

//DELETE
breads.delete('/:arrayIndex', (req, res) => {
    const arrayIndex = req.params.arrayIndex;
    Bread.splice(arrayIndex, 1);
    res.status(303).redirect('/breads');
});

module.exports = breads;