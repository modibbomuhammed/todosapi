var db = require('../models');

exports.getTodos = (req,res) => {
	// res.send("Hello from the other side")
	db.Todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		console.log(err);
		res.send(err);
	})
}

exports.createTodo = (req,res) => {
	// console.log(req);
	// console.log(req.body)
	// res.send("Hit the post route")
	db.Todo.create(req.body)
	.then(function(newTodo){
		// res.redirect('/api/todos/');
		console.log(newTodo);
		res.status(201).json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.getTodo = function(req,res){
	db.Todo.findById(req.params.todoId)
	.then(function(foundTodo){
		res.json(foundTodo);
	})
	.catch(function(err){
		res.send(err);
	})
}


exports.updateTodo =  (req,res) =>{
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(todo){
		res.json(todo)
	})
	.catch(function(err){
		res.send(err)
	})
}

exports.deleteTodo = function(req,res){
	db.Todo.remove({_id: req.params.todoId})
	.then(function(){
		res.json({message: "We deleted it"})
	})
	.catch(function(err){
		
	})
}



module.exports = exports