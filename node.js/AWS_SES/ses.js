// load aws sdk
var aws = require('aws-sdk');

// load aws config
aws.config.loadFromPath('config.json');

// load AWS SES
var ses = new aws.SES();

// send to list
var to = ['vysya369@gmail.com'];

// this must relate to a verified SES account
var from = 'venkatreddygudla@gmail.com';

// employee payslip details
var empName="Venkat";
var month="November";
var year=2018;

// this sends the email
// @todo - add HTML version
ses.sendEmail( { 
   Source: from, 
   Destination: { ToAddresses: to },
   Message: {
       Subject: {
          Data: 'Belfrics Payslip'
       },
       Body: {
           Html: {
               Data: template(empName,month,year)
           }
        }
   }
}
, function(err, data) {
    if(err) throw err;
        console.log('Email sent yo!');
        // console.log(data);            // data consists of request id and message id
});

// sending template
function template(empName,month,year){
    return `
     <!DOCTYPE html>
     <html>
       <head>
         <meta charset='UTF-8' />
         <title>title</title>
       </head>
       <body style="font-family:Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; background-color:#b6b6b6; margin:0; padding:0; color:#fff;" >
<br><br><br>    
<table width="100%" bgcolor="#b6b6b6" cellpadding="0" cellspacing="0" border="0" class="tableContent bgBody">

    <tbody>
        <tr>
            <td style="padding:50px 0;" >
               
               <table cellpadding="0" cellspacing="0" width="600" height="" border="0" align="center" style="background:#fff;">
			   
                    <tbody>
                    
                        <tr valign="top">
                            <td>
								 
                                <table cellpadding="0" width="100%" cellspacing="0" border="0" class="bg-bg">
                                    
                                    <tbody>
									<tr>
											
											<td width="600">
                                                <img src="https://s3-ap-southeast-1.amazonaws.com/belrium-static-content-prod/Belrium+logo.png" width="" height="" alt="" style="display:block; padding-top:30px;width:100px;margin-left:470px" />
                                                <br><br>
											</td>
                                    </tr>
                                    </tbody>
                                </table>
								<table cellpadding="0" width="100%" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
											<td width="600" style="text-align:center;">
												<p style="color:#000;font-size: 22px;color:#f03a1c;padding:0 10px; text-align:left">Dear ${empName},</p>
												<p style="color:#000;font-size: 20px; text-align:left">&nbsp;&nbsp;Your payslip for ${month} ${year} has been issued.</p>
                                                <button id="view" style="text-decoration: none; background-color: #021a47;color: #fff; padding: 8px; border: none; margin:20px 0;">View</button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button id="verify" style="text-decoration: none; background-color: #021a47;color: #fff; padding: 8px; border: none; margin:20px 0;">Verify</button>
                                                
												<div style="height: 40px"></div></td>
												   </tr>
												</tbody>
												  </table>
												 
												
												<!-- <p class="foot">if you need any assistance in setting up your account please contact us at <span style="color:#f03a1c"><a href="mailto:support@belrium.com" target="_blank" style="text-decoration:none; color: #f03a1c;">support@belrium.com</a></span></p> -->
												<table cellpadding="0" width="100%" cellspacing="0" border="0">
													<tbody>
														<tr style="background-color:#1c2af0;">
														<td style="font-size:14px;color: #fff; width: 70%; padding:15px;">Visit <a href="http://www.belrium.io" target="_blank" style="text-decoration:none; color: #fff;">www.belrium.com</a> | Contact Us | Privacy Policy</td>
															<td width="250"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p> </td>
															<td width="40"><a href="#" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/belrium-static-content-prod/fb.png" width="26px" height="" alt="" style="display:block;margin:auto; border:0; padding-top:0px; padding-left:0px; " /> </a> </td>
															<td width="40">
																<a href="#" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/belrium-static-content-prod/twitter.png" width="26px" height="" alt="" style="display:block; border:0;margin:auto;padding-top:0px;padding-right:0px;" /></a>
															</td>
															<td width="40"><a href="#" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/belrium-static-content-prod/in.png" width="26px" height="" alt="" style="display:block;margin:auto; border:0; padding-top:0px; padding-left:0px; " /> </a> </td>
															<td width="40">
																<a href="#" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/belrium-static-content-prod/google-plus.png" width="26px" height="" alt="" style="display:block;border:0; margin:auto; padding-top:0px;padding-right:0px;" /></a>
															</td>
															<td width="250"><p style="margin:0; font-size:1px; line-height:1px;">&nbsp;</p> </td>
                                                        </tr>
                                                        
													</tbody>
												</table>
											</td>
                                        </tr>
                                    </tbody>
                                </table>
								
                            </td>
                        </tr>
                    </tbody>
                    </table>
		</body>			
     </html>
    `
}