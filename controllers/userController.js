// import the user model
const User = require('../models/user');

// import the bcrypt library
const bcrypt = require('bcrypt');

// define the user controller
const userController = {
    // define the register method
    register: async (request, response) => {
        try {
            // get the user inputs from the request body
            const { username, password, name, location } = request.body;

            // check if the username already exists
            const user = await User.findOne({ username });

            // if the username exists, return an error message
            if (user) {
                return response.status(400).json({ message: 'User already exists' });
            }

            // hash the password
            const passwordHash = await bcrypt.hash(password, 10);

            // create a new user
            const newUser = new User({
                username,
                passwordHash,
                name,
                location
            });

            // save the user
            const savedUser = await newUser.save();

            // return a success message with the saved user
            response.status(201).json({ message: 'User created successfully', user: savedUser });

            // response.status(201).json({ message: 'User created successfully' });
        } catch(error) {    
            response.status(500).json({ message: error.message });
        }
    }
}

// export the controller
module.exports = userController;