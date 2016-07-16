"use strict";

var projects = [
    {projectId: 1, title: 'Дом в Барвихе', description: 'Трехэтажный дом с верандой'},
    {projectId: 2, title: 'Баня в Репино', description: 'Баня из оцелиндрованного бревно'},
    // { projectId: 3, title: 'Однокомнатная квартира на Фучика', description: 'Ремонт кухни'},
    // { projectId: 4, title: 'Гостевой дом в Горетовке', description: 'Домик на 40 кв.м' },
    // { projectId: 5, title: 'Ремонт ванной комнаты в Солнцево', description: 'Запланирован в июле' }
];

var spendings = [
    {
        id: 1, projectId: 1, stage: 1, subStage: 1, material: 1, unit: 1,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Без комментариев'
    },
    {
        id: 2, projectId: 1, stage: 2, subStage: 2, material: 2, unit: 2,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Быстрая доставка'
    },
    {
        id: 3, projectId: 2, stage: 1, subStage: 1, material: 3, unit: 3,
        supplier: 'Бетон-Люкс', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 4, projectId: 1, stage: 1, subStage: 1, material: 2, unit: 1,
        supplier: 'Магента', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 5, projectId: 1, stage: 1, subStage: 1, material: 1, unit: 1,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Без комментариев'
    },
    {
        id: 6, projectId: 1, stage: 2, subStage: 2, material: 2, unit: 2,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Быстрая доставка'
    },
    {
        id: 7, projectId: 1, stage: 1, subStage: 1, material: 3, unit: 3,
        supplier: 'Бетон-Люкс', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 8, projectId: 1, stage: 1, subStage: 1, material: 2, unit: 1,
        supplier: 'Магента', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 9, projectId: 2, stage: 1, subStage: 1, material: 1, unit: 1,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Без комментариев'
    },
    {
        id: 10, projectId: 2, stage: 2, subStage: 2, material: 2, unit: 2,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Быстрая доставка'
    },
    {
        id: 11, projectId: 2, stage: 1, subStage: 1, material: 3, unit: 3,
        supplier: 'Бетон-Люкс', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 12, projectId: 2, stage: 1, subStage: 1, material: 2, unit: 1,
        supplier: 'Магента', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 13, projectId: 2, stage: 1, subStage: 1, material: 1, unit: 1,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Без комментариев'
    },
    {
        id: 14, projectId: 2, stage: 2, subStage: 2, material: 2, unit: 2,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Быстрая доставка'
    },
    {
        id: 15, projectId: 2, stage: 1, subStage: 1, material: 3, unit: 3,
        supplier: 'Бетон-Люкс', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 16, projectId: 2, stage: 1, subStage: 1, material: 2, unit: 1,
        supplier: 'Магента', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 51, projectId: 1, stage: 1, subStage: 1, material: 1, unit: 1,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Без комментариев'
    },
    {
        id: 52, projectId: 1, stage: 2, subStage: 2, material: 2, unit: 2,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Быстрая доставка'
    },
    {
        id: 53, projectId: 2, stage: 1, subStage: 1, material: 3, unit: 3,
        supplier: 'Бетон-Люкс', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 54, projectId: 1, stage: 1, subStage: 1, material: 2, unit: 1,
        supplier: 'Магента', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 65, projectId: 1, stage: 1, subStage: 1, material: 1, unit: 1,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Без комментариев'
    },
    {
        id: 66, projectId: 1, stage: 2, subStage: 2, material: 2, unit: 2,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Быстрая доставка'
    },
    {
        id: 67, projectId: 1, stage: 1, subStage: 1, material: 3, unit: 3,
        supplier: 'Бетон-Люкс', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 58, projectId: 1, stage: 1, subStage: 1, material: 2, unit: 1,
        supplier: 'Магента', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 6543, projectId: 2, stage: 1, subStage: 1, material: 1, unit: 1,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Без комментариев'
    },
    {
        id: 3456, projectId: 2, stage: 2, subStage: 2, material: 2, unit: 2,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Быстрая доставка'
    },
    {
        id: 4356, projectId: 2, stage: 1, subStage: 1, material: 3, unit: 3,
        supplier: 'Бетон-Люкс', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 134562, projectId: 2, stage: 1, subStage: 1, material: 2, unit: 1,
        supplier: 'Магента', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 564356, projectId: 2, stage: 1, subStage: 1, material: 1, unit: 1,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Без комментариев'
    },
    {
        id: 1454, projectId: 2, stage: 2, subStage: 2, material: 2, unit: 2,
        supplier: 'Петрович', quantity: 10, price: 500, comments: 'Быстрая доставка'
    },
    {
        id: 34563, projectId: 2, stage: 1, subStage: 1, material: 3, unit: 3,
        supplier: 'Бетон-Люкс', quantity: 5, price: 3000, comments: 'С доставкой'
    },
    {
        id: 653463, projectId: 2, stage: 1, subStage: 1, material: 2, unit: 1,
        supplier: 'Магента', quantity: 5, price: 3000, comments: 'С доставкой'
    }
];

var stages = [
    {id: 1, name: 'фундамент'},
    {id: 2, name: 'стены'},
    {id: 3, name: 'кровля'},
    {id: 4, name: 'отмостка'},
];

var subStages = [
    {id: 1, name: 'пол'},
    {id: 2, name: 'обои'},
    {id: 3, name: 'обрешетка'},
    {id: 4, name: 'канализация'}
];

var materials = [
    {id: 1, name: 'гвозди'},
    {id: 2, name: 'бетон'},
    {id: 3, name: 'брус'},
    {id: 4, name: 'черепица'}
];

var units = [
    {id: 1, name: 'м'},
    {id: 2, name: 'шт'},
    {id: 3, name: 'кг'},
    {id: 4, name: 'м3'}
];

module.exports = {
    projects: projects,
    spendings: spendings,
    stages: stages,
    subStages: subStages,
    materials: materials,
    units: units
};