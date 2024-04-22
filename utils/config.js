// import the dotenv package
require('dotenv').config();

// create all the necessary configuration variables
const MongoDB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// export the configuration variables
module.exports = {
    MongoDB_URI,
    PORT
};