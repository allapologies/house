var projects = [
  { projectId: 1, title: 'Дом в Барвихе', description: 'Трехэтажный дом с верандой' },
  { projectId: 2, title: 'Баня в Репино', description: 'Баня из оцелиндрованного бревно' },
  { projectId: 3, title: 'Однокомнатная квартира на Фучика', description: 'Ремонт кухни'},
  { projectId: 4, title: 'Гостевой дом в Горетовке', description: 'Домик на 40 кв.м' },
  { projectId: 5, title: 'Ремонт ванной комнаты в Солнцево', description: 'Запланирован в июле' }
];

var spendings = [
  { id:1, projectId: 1, stage: 1, subStage: 1, material: 'Обои',
    supplier:'Петрович', quantity:10, price:500, comments: 'Без комментариев' 
  },
  { id:2, projectId: 1, stage: 2, subStage: 2, material: 'Дерево',
    supplier:'Петрович', quantity:10, price:500, comments: 'Быстрая доставка'
  },
  { id:3, projectId: 2, stage: 1, subStage: 1, material: 'Бетон',
    supplier:'Бетон-Люкс', quantity:5, price:3000, comments: 'С доставкой'
  }
];

module.exports = {
    projects: projects,
    spendings: spendings
};