const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { output: ''});
});
app.post('/signup', function(req,res){
  console.log(req.body.input);
  res.render('index', { output: req.body.input});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.use(express.static('public'));
