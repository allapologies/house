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

router.get('/spendings', function (req, res, next) {
    var spendings = (mocks.spendings).map(function (spending) {
        return assign({}, spending)
    });
    res.json(spendings)
});

router.post('/spendings', function (req, res, next) {
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

module.exports = router;