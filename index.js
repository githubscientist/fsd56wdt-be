// import the mongoose module
const mongoose = require('mongoose');

// import the config module
const config = require('./utils/config');

console.log('Connecting to MongoDB...');

// Connect to MongoDB using mongoose
mongoose.connect(config.MongoDB_URI)
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB...', error.message);
    })