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


router.get('/requirement', function (req, res) {
    res.sendfile('./views/requirement.html');
});

router.post('/requirement', function (req, res) {
    console.log(req.query);
    res.sendfile('./views/requirement.html');
});

router.get('/feedback', function (req, res) {
    res.sendfile('./views/feedback.html');
});

router.get('/thankyou', function (req, res) {
    res.sendfile('./views/thankyou.html');
})

router.get('/sendtag', function (req, res) {
    res.sendfile('./views/tagsender.html');
})

router.post('/sendtag', function (req, res) {
    console.log(req.body.tag);
    controller.default.prototype.processWordCloud(JSON.stringify({"text":req.body.tag,"size":1}));
    res.sendfile('./views/tagsender.html');
});


router.get('/library.html', function (req, res) {
    res.sendfile('./views/library.html');
});

router.get('/getJSON', function (req, res) {
    res.json(controller.default.prototype.getCourseDatasets());
})

router.get('/getwork', function (req, res) {
    res.json(controller.default.prototype.getWordCloudDatasets());
})


module.exports = router;
