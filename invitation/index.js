var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');

var likeRouter = require('./likeRouter');

const port = 3000;
var app = express();

// mariaDB connect
const maria = require('./maria');
maria.connect();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');
app.use(express.static('public'));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'));
})


app.use('/likes', likeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err)

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;

