const express = require('express');
const todos = require('../models/model');
const router = express.Router();

router.get('/', function(req, res){
    todos.find(function(err, data){
        if(err) res.send(err);
        res.json(data);
    });
});

router.post('/', function(req, res){ 
    var newTodo = todos(req.body);
    todos.create(req.body)
        .then(function(todo){
            res.json(todo)
        })
        .catch(function(err){
            res.send(err);
        });
});

router.delete('/:todoId', function(req, res){
    todos.remove({_id: req.params.todoId})
        .then(function(){
            res.json({message: "Removed!"});
        })
        .catch(function(err){
            res.send(err);
        });
});

module.exports = router;
