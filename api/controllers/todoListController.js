'use strict';

function send_response_back(res) {
    return function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    };
}

var mongoose = require('mongoose');
var Task = mongoose.model('Tasks');

exports.list_all_tasks = function (req, res) {
    Task.find({}, send_response_back(res));
};

exports.create_a_task = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save(send_response_back(res));
};

exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, send_response_back(res));
};


exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, send_response_back(res));
};

exports.delete_a_task = function (req, res) {
    function delete_task() {
        return function (err, task) {
            if (err)
                res.send(err);
            res.json({message: 'Task successfully deleted'});
        };
    }

    Task.remove({_id: req.params.taskId}, delete_task(req, res));
};