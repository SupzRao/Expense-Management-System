var express=require('express');
var userController=require('./controllers/userController')
var app=express();
userController(app);

app.listen(3000);
console.log('listening to port 3000');
