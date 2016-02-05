var rules = {
  'email': {
  isEmail: {
    errorMessage: 'E-mail адрес введен с ошибками'
  }
},
  'name': {
  notEmpty: true,
  errorMessage: 'Пожалуйста, укажите Ваше имя'
},
  'msg': {
    notEmpty: true,
    isLength: {
    options: [{ max: 1000 }],
    errorMessage: 'Сообщение должно быть не больше 1000 знаков'
  },
  errorMessage: 'Пожалуйста введите своё сообщение'
  }
};

module.exports = rules;