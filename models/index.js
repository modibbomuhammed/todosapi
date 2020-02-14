
var mongoose	= require("mongoose");

mongoose.set('debug', true);

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});

// .then(()=> console.log('connnected to the db'));

// .catch(err => console.log(`Failed to connect to the database due to ${err}`));

mongoose.Promise = Promise;



module.exports.Todo = require('./todos')