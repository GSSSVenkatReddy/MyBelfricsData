var express=require("express");
var bodyParser=require('body-parser');
 
// var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/org_login');
var registerController=require('./controllers/org_reg');

var empLogin=require('./controllers/emp_login');
var empReg=require('./controllers/emp_reg');

var payroll=require('./controllers/payroll');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "main_page.html" ); 
 })  

app.get('/org_reg.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "org_reg.html" );  
})  
 
app.get('/org_login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "org_login.html" );  
})  


app.get('/emp_reg.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "emp_reg.html" );  
 })  


app.get('/emp_login.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "emp_login.html" );  
 })  


app.get('/payroll.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "payroll.html" );  
 })  
 
/* route to handle login and registration */
// app.post('/api/register',registerController.register);
// app.post('/api/authenticate',authenticateController.authenticate);
 
// console.log(authenticateController);
// console.log(registerController);
 
// console.log(empLogin);
// console.log(empReg);

app.post('/controllers/org_reg', registerController.register);

app.post('/controllers/org_login', authenticateController.authenticate);

app.post('/controllers/emp_reg', empReg.register);

app.post('/controllers/emp_login', empLogin.authenticate);

app.post('/controllers/payroll', payroll.register);

app.listen(8012);
console.log("server started at localhost:8012");