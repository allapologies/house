var rules = {

  'floors': {
    notEmpty: true,
    isLength: {
      options: [{ min:1, max: 2 }],
      errorMessage: 'Количество этажей может быть 1 или 2'
      },
    errorMessage: 'Количество этажей не указано'
  },

  'rooms': {
    notEmpty: true,
    isLength: {
      options: [{ min:1, max: 4 }],
      errorMessage: 'Количество комнат может быть от 1 до 4'
    },
    errorMessage: 'Количество комнат не указано'
  },

  'sideA': {
    notEmpty: true,
    errorMessage: 'Ширина дома не указана'
  },

  'sideB': {
    notEmpty: true,
    errorMessage: 'Длина дома не указана'
  },

  'foundation': {
    notEmpty: true,
    errorMessage: 'Не указан тип фундамента'
  },

  'roof': {
    notEmpty: true,
    errorMessage: 'Не указан тип кровли'
  }
};

module.exports = rules;