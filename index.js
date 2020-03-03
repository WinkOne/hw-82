const express = require('express');
const mongoose = require('mongoose');

const Album = require('./app/Album');
const Artist = require('./app/Artist');
const Track = require('./app/Track');

const config = require('./config');


const app = express();

app.use(express.json());
app.use(express.static('public'));



const run = async () => {
    await mongoose.connect('mongodb://localhost', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use('/artist', Artist);
    app.use('/album', Album);
    app.use('/track', Track);

    app.listen(config.port, () => {
        console.log(`Server started on ${config.port} port!`)
    })
};

run().catch(e => {
    console.error(e)
});