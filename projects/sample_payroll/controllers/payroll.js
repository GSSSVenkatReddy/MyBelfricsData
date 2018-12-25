var Cryptr = require('cryptr');
var express=require("express");
var connection = require('../config');
 
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "eid":req.body.eid,
        "name":req.body.name,
        "orgName":req.body.orgName,
        "email":req.body.email,
        "salary":req.body.salary,
        "month":req.body.month,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO pay SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'payroll created sucessfully',
            payroll:users
        })
      }
    });
}
