var express=require('express');
var userController=require('./controllers/userController');
var expenseController=require('./controllers/expenseController');
var app=express();
userController(app);
expenseController(app);

app.listen(3000);
console.log('listening to port 3000');
