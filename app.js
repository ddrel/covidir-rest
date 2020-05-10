const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const indexRouter = require('./app/index/routes/index');
const covidRouter = require('./app/covid/routes/index');
const compression = require('compression');

require('dotenv').config()

const app = express();

app.options('*', cors())
    app.use(function(req, res, next) { res.header('Access-Control-Allow-Origin', "*"); res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); res.header('Access-Control-Allow-Headers', 'Content-Type'); next();
})

// GZIP all assets
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Models
require('./app/covid/model/index');

//router
app.use('/', indexRouter);
app.use('/covid', covidRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler
app.use(function(err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    res.send(err);
});

require("./app_db/connection").connect();

module.exports = app;
