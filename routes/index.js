var express = require('express');
var router = express.Router();
var controller = require('../controller/DatasetController.js');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Team: NOP' });
// });

router.get('/', function (req, res) {
    res.sendfile('./views/teacherAdd.html');
});

router.get('/heyheyhey', function (req, res) {
    res.sendfile('./views/requirement.html');
});

router.get('/library.html', function (req, res) {
    res.sendfile('./views/library.html');
    // res.send(controller.default.prototype.getDatasets());
});

router.get('/getJSON', function (req, res) {
    res.json(controller.default.prototype.getDatasets());
})



module.exports = router;
