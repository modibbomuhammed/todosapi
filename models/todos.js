let mongoose = require('mongoose')

let todoschema = new mongoose.Schema({
	name: {
		type: String,
		required: 'Please fill in your name!!'
	},
	completed: {
		type: Boolean,
		default: false
	},
	createdDate: {
		type: Date,
		default: Date.now
	}
}) 

var Todo = mongoose.model("Todo", todoschema);

module.exports = Todo;

