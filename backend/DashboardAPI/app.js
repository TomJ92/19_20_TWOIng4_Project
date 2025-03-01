var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(cors());

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbName = "DashboardProject" ;
const dbURL = ' mongodb://localhost:27017/DashboardProject';
// Connecting to the database
mongoose.connect(dbURL,
{
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log('DB Connection Error: ${err.message}');
});
//Developper Mozilla Express Tutorial Part 3 Using a Databse with Mangoose
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var sensorRouter = require('./routes/sensor');
var measureRouter = require('./routes/measure');
var usersRouter = require('./routes/users');
var sensorsRouter = require('./routes/sensors');
var measuresRouter = require('./routes/measures');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/user", userRouter);
app.use("/measure", measureRouter);
app.use("/sensor", sensorRouter);
app.use("/users", usersRouter);
app.use("/measures", measuresRouter);
app.use("/sensors", sensorsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
