const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const m = require('./model/matrix');
const op = require('./model/operation');
const fix = require('./model/operationsFixer');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { output: ''});
});
app.post('/signup', function(req,res){
  const input = req.body.input;
  const lines = input.split('\r\n');
  let output = '';
  let current = 0;
  const opNumber = lines[current];
  current++;
  for(let j = 0; j < opNumber; j++){
    const size = fix.fixSetup(lines[current]).size;
    const queries = fix.fixSetup(lines[current]).queries;
    current++;
    let matrix = m.createMatrix(size);
    for(let i = 0; i< queries; i++){
      let oper = fix.fixOperation(lines[current]);
      if(oper.operation === 'UPDATE'){
        op.update(matrix, oper.x, oper.y, oper.z, oper. w);
      } else if (oper.operation === 'QUERY'){
        output += op.query(matrix, oper.x1, oper.y1, oper.z1, oper.x2, oper.y2, oper.z2) + '\n';
      }
      current++;
    }
  }
  res.render('index', {input, output });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.use(express.static('public'));
