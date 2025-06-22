const express = require('express');
const app = express();

app.use(express.json());

const publicRoutes = require('./routes/publicRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

app.use('/public', publicRoutes);
app.use('/protected', protectedRoutes);

module.exports = app;
