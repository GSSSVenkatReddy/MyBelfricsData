var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Gsssvr@525',
  database : 'payroll'
});
connection.connect(function(err){
if(!err) {
    console.log("connected to payroll database");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;
