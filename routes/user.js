const express = require('express');

const user = express.Router();

const userData = require('../controller/user');

user.get('/', userData.getHomePage);

user.get('/sales', userData.getSales);

user.get('/contact', userData.getContact);

user.post('/submit', userData.getAddProductPage)

user.get('/cart', userData.getCart);

user.get('/orders', userData.getOrder);

user.post('/admin', userData.getAdminPage);

exports.user = user;