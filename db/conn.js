const mongoose = require('mongoose');

const db = process.env.database;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected');
}).catch((err) => console.log("can't connect"));


