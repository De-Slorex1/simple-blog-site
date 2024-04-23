const express = require('express');

const admin = express.Router();

const adminController = require('../controller/admin');

admin.get('/product', adminController.getProduct);

admin.post('/product', adminController.postProduct);

admin.get('/admin-add-product', adminController.getAdminProductPage);

exports.admin = admin;