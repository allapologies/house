var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'myHouse - Контакты' });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "myhousefeedback@gmail.com",
        pass: "SuperWeakyPassword"
      }
    });
  var mailOptions = {
    from: "myHouse <myhousefeedback@gmail.com>",
    to: "alexvtec@yandex.ru",
    subject: "Обратная связь myHouse",
    text: "Получено сообщение от " +req.body.name+ " email: " + req.body.email + ": " +req.body.msg,
    html: "<p>Получено сообщение</p><ul><li>Отправитель: " +req.body.name+"</li><li>email: " + req.body.email + "</li><li>Текст сообщения: " +req.body.msg+"</li></ul>"
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error){
      console.log(error);
      res.redirect("/");
    } else {
      console.log("Message sent "+ info.response);
      res.redirect("/");
    }
  });
});

module.exports = router;