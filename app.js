const express = require('express');
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());


// const middleware = (req, res, next) => {
//     console.log("Hello my midleware");

//     next();

// }

//Database
require('./db/conn');

//json readable
app.use(express.json());

///routes
app.use(require('./router/auth'));

// app.get('/', (req, res) => {
//     res.send("hello world ");
// })
// app.get('/about', (req, res) => {
//     res.send("hello world ");
// })
app.get('/contact', (req, res) => {
    res.cookie("Test", "varun");
    res.send("hello world ");
})
app.get('/signin', (req, res) => {
    res.send("hello world ");
})
// app.get('/signup', (req, res) => {
//     res.send("hello world ");
// })
app.get('/projects', (req, res) => {
    res.send("hello world ");
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
