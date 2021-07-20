const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://dbStech:Sumit123@sumit.nixb5.mongodb.net/mongodb';
const port = 8080;

const app = express()

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB is connected Successfull!!');
    }
    else {
        console.log('MongoDB ERROR!! ' + err);
    }
});

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
})