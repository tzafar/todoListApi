'use strict';
module.exports = function (app) {
    var bookController = require('../controllers/bookController');

    //Note: these below also work
    // bookController Routes
    // app.route('/books')
    //     .get(bookController.list_all_books);
    //.post(bookController.create_a_book);


    // app.route('/books/:bookId')
    //     .get(bookController.read_a_book)
    //     .put(bookController.update_a_book)
    //     .delete(bookController.delete_a_book);


    //simplified form
    // app.get('/', bookController.welcome);

    app.get('/books', bookController.list_all_books);

    app.get('/books/:bookId', [bookController.read_a_book]);

    app.post('/books', [bookController.create_a_book]);

    app.put('/books/:bookId', [bookController.update_a_book]);

    app.delete('/books/:bookId', [bookController.delete_a_book]);

};
