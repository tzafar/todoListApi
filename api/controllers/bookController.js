'use strict';

let model_file = '../models/bookModel';
const BookModel = require(model_file);

exports.list_all_books = function (req, res) {
    BookModel.list().then(
        (books) => {
            res.status(200).send(books)
        }
    );

};

exports.create_a_book = function (req, res) {
    BookModel.createBook(req.body).then(
        (book) => {
            res.status(200).send({id: book._id});
        }
    );
};

exports.read_a_book = function (req, res) {
    BookModel.findById(req.params.bookId).then(
        (book) => {
            res.status(200).send(book);
        }
    );
}; 

exports.update_a_book = function (req, res) {
    BookModel.findOneAndUpdate({_id: req.params.bookId}, req.body).then(
        (updatedBook) => {
            return res.status(200).send({id: updatedBook._id});
        }
    );
};

exports.delete_a_book = function (req, res) {
    BookModel.remove({_id: req.params.bookId}).then(
        () => {
            return res.status(204).send({});
        }
    );
};
