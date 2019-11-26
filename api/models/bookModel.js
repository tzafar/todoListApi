'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  name: {
    type: String,
    required: 'Missing field! Kindly enter the name of the book'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },

});

const Book = mongoose.model("Books", BookSchema);

exports.createBook = (newBook) => {
  const book = new Book(newBook);
  return book.save(book);
};

exports.list = () => {
  return new Promise((resolve, reject) => {
    Book.find()
        .exec(function (err, books) {
          if (err) {
            reject(err);
          } else {
            resolve(books);
          }
        });
  });
};

exports.findById = (bookId) => {
  return Book.findById(bookId);
};

exports.findOneAndUpdate = (bookId, updatedBook) => {
  return new Promise((resolve, reject) => {
    Book.findById(bookId, function (err, user) {
      if (err) reject(err);
      for (let i in updatedBook) {
        user[i] = updatedBook[i];
      }
      user.save(function (err, updatedBook) {
        if (err) return reject(err);
        resolve(updatedBook);
      });
    });
  })
};

exports.remove = (bookId) => {
  return new Promise((resolve, reject) => {
    Book.deleteOne({_id: bookId}, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(err);
      }
    });
  })
};


exports.remove_all = () => {
    return new Promise((resolve, reject) => {
        Book.deleteMany({}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    })
};