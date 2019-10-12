const express = require('express');
const routes = require('./routes');
const errorsHandler = require('./errorsHandler');

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(errorsHandler);

module.exports = app;
