'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    //Note: these below also work
    // todoList Routes
    // app.route('/tasks')
    //     .get(todoList.list_all_tasks);
    //.post(todoList.create_a_task);


    // app.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);


    //simplified form
    app.get('/tasks', todoList.list_all_tasks);

    app.get('/tasks/:taskId', [todoList.read_a_task]);

    app.post('/tasks', [todoList.create_a_task]);

    app.put('/tasks/:taskId', [todoList.update_a_task]);

    app.delete('/tasks/:taskId', [todoList.delete_a_task]);
};