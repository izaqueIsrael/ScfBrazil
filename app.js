const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const voidRouter = require('./routes/voidRouter');
const sourceRouter = require('./routes/sourceRouter');

const app = express();
const port = 3000;

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/users', userRouter);
app.use('/', sourceRouter);
app.use('/*', voidRouter);

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
