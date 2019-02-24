// const $ = require('jquery');
const express = require('express');
const path = require('path');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
var logger = require('morgan');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SavedBooks";
const GOOGLY_API = process.env.GOOGLY_API;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger("dev"))

mongoose.connect(MONGODB_URI, {newUrlParser:true});

const dbRoute = require(path.join(__dirname, "./models/book.js"))

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/api/books', (req, res) => {
    dbRoute.find({}, function(err, result) {
        if(err){
            throw err;
        } else {
            res.json(result)
        }
    })
})

app.post('/api/books', (req, res) => {
    dbRoute.create(req.body).then(data =>{
        console.log(data);
        res.send("Book Saved!")
    }).catch(err => {throw err;})
})

app.delete('/api/books/:id', (req, res) => {
    //delete book
    const bookId = req.params.id

    // dbRoute.SavedBooks.getOne({_id:bookId}, function(err, data){
    //     if (err) throw err;
    //     data.bookId = undefined;
    //     data.save();
    // })

    dbRoute.find({_id: bookId}, {justOne: true}).deleteOne((err,response) => {
        console.log(response)
        if(err){throw err}
        else res.send('Done');
    })
})

app.use('*', (req, res) => {
    // res.send()
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})