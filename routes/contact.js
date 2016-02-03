var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var helpers = require('../handlers/helpers');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Контакты' });
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
    subject: req.body.subject || "Обратная связь myHouse",
    text: "Получено сообщение от " +req.body.name+ " email: " + req.body.email + " тема:"+req.body.subject + " : " +req.body.msg,
    html: "<p>Получено сообщение</p><ul><li>Отправитель: " +req.body.name+"</li><li>email: " + req.body.email + "</li><li>Тема сообщения: " +req.body.subject+"</li><li>Текст сообщения: " +req.body.msg+"</li></ul>"
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error){
      helpers.send_failure(res, error.code, error);
    } else {
      console.log("Message sent "+ info.response);
      helpers.send_success(res, info.response);
    }
  });
});

module.exports = router;