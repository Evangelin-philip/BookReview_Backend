const express = require('express');
const jwtMiddleware = require('./middleware/jwtMW');
const userController = require('./controller/userController');
const bookController = require('./controller/bookController');
const authValidator = require('./validators/authValidator');
const bookValidator = require('./validators/bookValidator');

const route = new express.Router();

route.post('/register', authValidator.validateRegister, userController.registerController);
route.post('/login', authValidator.validateLogin, userController.loginController);

// For authenticated routes, JWT middleware first
route.post('/books', jwtMiddleware, bookValidator.validateAddBook, bookController.addBookController);
route.get('/books', bookController.getAllBooksController);
route.get('/books/:id', bookController.getABookController);
route.post('/books/:id/review', jwtMiddleware, bookValidator.validateAddReview, bookController.addReviewController);

module.exports = route;
