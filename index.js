const express 		= require("express"),
	  app			= express(),
	  bodyParser	=require('body-parser'),
	  port			= process.env.PORT || 3000;


var todoroutes	= require("./routes/todos");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))

app.use("/api/todos", todoroutes);

app.get("/", function(req,res){
	res.sendfile("index")
})


app.get("/happy", function(req,res){
	res.send("{message: \" Whats up \"}")
})

app.listen(port, function(){
	console.log(`Server is running on port ${port}`)
})
