const express = require('express');
const app = express();
const port = 3000;

const tourRouter = require('./router/tourRouter');

app.use('/tours', tourRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});