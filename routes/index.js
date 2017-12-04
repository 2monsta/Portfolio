var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var config = require("../config/config");
var transport = {
	host: 'smtp.gmail.com',
	auth: {
		user: config.USER,
		pass: config.pass
	}
}
var transporter = nodemailer.createTransport(transport);
transporter.verify((error,success)=>{
	if(error){
		console.log(error)
	}else{
		console.log("server is ready to take messages");
	}
})
/* GET home page. */
router.get('/', function(req, res, next) {
	var message = '';
	if(req.query.msg != undefined){
		message = req.query.msg;
	}
  res.render('index', {message:message});
});

router.get("/resume", (req, res, next)=>{
    res.render("resume");
});

router.post("/mail", (req, res, next)=>{
	var {name, email, phone, message} = req.body;
	var finalMessage = `${message} \n\n phone: ${phone} \n email: ${email}`;
	var mail = {
		from: email,
		to: 'yunf.li37@gmail.com',
		subject: name,
		text: finalMessage
	}
	transporter.sendMail(mail, (error, data)=>{
		if(error){
			console.log(error);
			res.redirect("/?msg=Fail");
		}else{
			console.log("success");
			res.redirect("/?msg=Thank%20You%20For%20Contacting%20Me");
		}
	});
})

module.exports = router;
