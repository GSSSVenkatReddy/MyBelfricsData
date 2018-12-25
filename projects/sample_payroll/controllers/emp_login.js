var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM employees WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query',
            })
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
              connection.query('SELECT * FROM pay WHERE email = ?',[email], function (error, payroll, fields) {
                if (error) {
                    res.json({
                      status:false,
                      message:'there are some error with query',
                      })
                    }
                else{
                  var payroll_data=res.json({
                    payroll_details:payroll,
                    //fields:fields
                  })
                }
              });
                //res.attachment("payroll_data.json")
                // res.json({
                //     status:true,
                //     message:'successfully authenticated',
                //     //output:results,
                // })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}
