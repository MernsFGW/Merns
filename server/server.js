require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

mongoose.set('strictQuery', true);

mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connect to db and listening on port', process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });