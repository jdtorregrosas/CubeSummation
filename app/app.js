const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const op = require('./model/operation');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { output: ''});
});
app.post('/', function(req,res){
  const input = req.body.input;
  const output = op.cubeSummation(input);
  res.render('index', {input, output });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.use(express.static('public'));
