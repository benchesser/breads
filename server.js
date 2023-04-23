const express = require('express');

//CONFIGURRATION
require('dotenv').config();
const PORT = process.env.PORT;
console.log('My port is,', PORT);

const app = express();

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads');
});

//Breads
const breadsController = require('./controllers/breads_controller.js');
app.use('/breads', breadsController)

//LISTEN
app.listen(PORT, () => {
    console.log('Server is listing on', PORT)
})
