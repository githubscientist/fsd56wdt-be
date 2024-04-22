// require express
const express = require('express');

// create an express app
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// export the app module
module.exports = app;