var express=require('express');
var app=express();
var employeeController=function(req,resp){
	console.log("invoke web api");
	var employee=[
	
	{id:101,name:"priya",job:"developer"},
	
	{id:102,name:"komal",job:"developer"},
	{id:103,name:"anshi",job:"developer"}
	{id:104,name:"anhi",job:"developer"}
	];
	resp.send(employee);
};
app.get('/employee',employeeController);
var server=app.listen(8087,function()
{
	console.log("listen at port no:8087")
})
	
