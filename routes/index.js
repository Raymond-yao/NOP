var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Team: NOP' });
// });

router.get('/', function(req, res) {
    res.sendfile('./views/feedback.html');
});


module.exports = router;
