var express = require('express');
var request = require('request')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  request('https://api.themoviedb.org/3/trending/all/week?api_key=0f0f4e4397fdd57b3f38401d074f4dff', {json: true}, function(error, response, body) {
    console.log(body)
    var result = body['results'][0].title
    res.send(result)
  });
});

module.exports = router;
