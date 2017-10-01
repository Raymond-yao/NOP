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

router.post('/test', function (req, res) {
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


router.get('/library.html', function (req, res) {
    res.sendfile('./views/library.html');
    // res.send(controller.default.prototype.getDatasets());
});

router.get('/getJSON', function (req, res) {
    res.json(controller.default.prototype.getDatasets());
})



module.exports = router;
