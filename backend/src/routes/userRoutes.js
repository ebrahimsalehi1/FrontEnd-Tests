const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

// Route for user registration
router.post('/register', userController.registerUser.bind(userController));

// Route for user login
router.post('/login', userController.loginUser.bind(userController));

// Route for fetching user details
router.get('/details/:email', userController.getUserDetails.bind(userController));

module.exports = router;