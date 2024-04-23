const http = require('http');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const userData = require('./routes/user');

const adminData = require('./routes/admin')

const path = require('path');

app.set('view engine', 'ejs')

app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminData.admin);

app.use(userData.user);

app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

server.listen(3000);