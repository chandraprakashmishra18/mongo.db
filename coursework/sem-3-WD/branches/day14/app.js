const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./router/tourRouter');
const userRouter = require('./router/userRouter');
const authRouter = require('./routes/authRoutes');

const app = express();

const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

// Home route
app.get('/', (req, res) => {
    console.log("This request is from this device");
    res.send("HOME PAGE");
});

// Routers
app.use('/packages', tourRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

module.exports = app;
