var express = require('express');
var path = require('path');
var functions = require('firebase-functions')
var {WebhookClient} = require('dialogflow-fulfillment')
var {card, Suggestion } = require('dialogflow-fulfillment')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var methodRouter = require('./routes/methods')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', methodRouter);

app.post('/dialogflow', express.json(), (req, res)=> {

    const agent = new WebhookClient({request: req, response:res});

    function test(agent) {
        agent.add('welcome to my server!!!! ^_^');
    }

    let intentMap = new Map();
    intentMap.set('tv_show', test);
    agent.handleRequest(intentMap);

});
app.listen(1337, function () {
    console.log('server was started');
});

module.exports = app;
