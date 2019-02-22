const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    id:{ type: String, required: true },
    title:{ type: String, required: true },
    author:{ type: String, required: true },
    image:{ type: String },
    description:{ type: String }
});

const Book = (mongoose.model("Book", bookSchema));

module.exports = Book;
