var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next){
    res.send('respond for list');
});

module.exports = router;