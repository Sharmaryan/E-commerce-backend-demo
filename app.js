const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
app.use(express.json());

// routes controller

const product = require('./routes/productRoute');

app.use('/api/v1/', product);

// error middleware

app.use(errorMiddleware);


module.exports = app;


