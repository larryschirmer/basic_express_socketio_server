const express = require('express');
const app = express();
const route = express.Router();

route.get('/', res => res.send('hello world'));
app.use('/', route);

module.exports = app;
