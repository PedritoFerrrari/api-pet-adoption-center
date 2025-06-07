const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes');
const publicRoutes = require('./routes/public.routes');
const protectedRoutes = require('./routes/protected.routes');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/public', publicRoutes);
app.use('/protected', protectedRoutes);

module.exports = app;
