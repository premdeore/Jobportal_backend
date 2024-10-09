const express = require('express');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const Router = express.Router;
const routes = Router();

const { userController } = require('../controllers/user/user.controller');


// Add routes
// routes.get('/', SessionController.store);
routes.post('/register', userController.userRegistration);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
