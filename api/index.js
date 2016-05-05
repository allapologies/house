var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/projects', function (req, res, next) {
    var projects = (mocks.projects).map(function (project) {
            return assign({}, project)
        });
    res.json(projects)
});

router.get('/projects/:id', function (req, res, next) {
    var project = (mocks.projects).filter(function (project) {
        return project.projectId == req.params.id
    })[0];
    if (project) return res.json(project);

    res.status(404).json({error: "not found"});
});

router.post('/projects', function (req, res, next) {
    var body = req.body;
    var project = {
        projectId: mocks.projects.length + 1,
        title: body.title,
        description: body.description
    };
    mocks.projects.push(project);
    res.json(project)
});

router.delete('/projects/:id', function (req, res, next) {
    mocks.projects = (mocks.projects).filter(function (project) {
        return project.projectId != req.params.id;
    });
    res.json(mocks.projects);
    //TODO handle successful and error response
    // res.status(404).json({error: "not found"});
});

router.get('/projects/:id/spendings', function (req, res, next) {
    var spendings = (mocks.spendings).filter(function (spending) {
        return spending.projectId ==req.params.id
    });
    res.json(spendings);
});

router.post('/projects/:id/spendings', function (req, res, next) {
    var body = req.body;
    var spending = {
        id: mocks.spendings.length + 1,
        projectId: body.projectId,
        stage: body.stage,
        subStage: body.subStage,
        material: body.material,
        supplier: body.supplier,
        quantity: body.quantity,
        price: body.price,
        comments: body.comments
    };
    mocks.spendings.push(spending);
    res.json(spending)
});

router.get('/stages', function (req, res, next) {
    let stages = (mocks.stages).map(function (stage) {
        return assign({}, stage)
    });
    let subStages = (mocks.subStages).map(function (sub) {
        return assign({}, sub)
    });
    
    res.json({stages,subStages});
});

router.get('/materials', function (req, res, next) {
    let materials = (mocks.materials).map(function (material) {
        return assign({}, material)
    });
    let units = (mocks.units).map(function (unit) {
        return assign({}, unit)
    });

    res.json({ materials, units });
});

module.exports = router;