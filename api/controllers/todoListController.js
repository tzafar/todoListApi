'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
    function list_tasks() {
        return function (err, task) {
            if (err)
                res.send(err);
            res.json(task);
        };
    }

    Task.find({}, list_tasks(req, res));
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);

    function create_task() {
        return function (err, task) {
            if (err)
                res.send(err);
            res.json(task);
        };
    }

    new_task.save(create_task(req, res));
};


exports.read_a_task = function(req, res) {
    function read_task() {
        return function (err, task) {
            if (err)
                res.send(err);
            res.json(task);
        };
    }

    Task.findById(req.params.taskId, read_task(req, res));
};


exports.update_a_task = function(req, res) {
    function update_task() {
        return function (err, task) {
            if (err)
                res.send(err);
            res.json(task);
        };
    }

    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, update_task(req, res));
};


exports.delete_a_task = function(req, res) {


    function delete_task() {
        return function (err, task) {
            if (err)
                res.send(err);
            res.json({message: 'Task successfully deleted'});
        };
    }

    Task.remove({
    _id: req.params.taskId
    }, delete_task(req, res));
};