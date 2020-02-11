/* global $ */

$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(addTodos)
	.catch(function(err){
		console.log(err)
	})
	
	$("#todoInput").keypress(function(){
		if(event.which === 13){
			createTodo()
		}
	})
	
	$('.list').on('click','span', function(e){
		e.stopPropagation();
		removeTodo($(this).parent());
	})
	
	$('.list').on('click','li', function(){
		updateTodo($(this))
		
	})
	
})



function addTodos(todos){
	todos.forEach(function(val){
		addTodo(val)
	})
}


function createTodo(){
	var value = $("#todoInput").val()
	$.post("/api/todos",{name: value})
	.then(function(newTodo){
		console.log(newTodo);
		addTodo(newTodo)
		$("#todoInput").val("")
	})
	.catch(function(err){
		console.log(err);
	})
	
	
}

function addTodo(todo){
	var newTodo = $("<li class='task'>" + todo.name + "<span>X</span></li>")
		console.log(todo._id, "from addtodo")
		newTodo.data('id', todo._id)
		newTodo.data('completed', todo.completed)
		todo.completed ? newTodo.addClass("done") : newTodo
		$(".list").append(newTodo)
}

function removeTodo(todo){
		let clickedId = todo.data('id')
		let deleteUrl = '/api/todos/' + clickedId
		$.ajax({
			method: 'DELETE',
			url:   deleteUrl
		})
		.then(function(mess){
			todo.remove()
			console.log(mess)
		})
		.catch(function(err){
			console.log(err)
		})
}

function updateTodo(todo){
		let isDone = !todo.data('completed');
		let clickedId = todo.data('id')
		let urlclicked = 'api/todos/' + clickedId
		let updataData = {completed: isDone}
		console.log(updataData);
		console.log(urlclicked);
		$.ajax({
			method: 'PUT',
			url: urlclicked,
			data: updataData
		})
		.then(function(updatedTodo){
			todo.toggleClass('done');
			todo.data('completed', isDone);
		})
		.catch(function(err){
			console.log(err);
		})
		
}