const fix = require('./operationsFixer');
const m = require('./matrix');

function fixCoordinates(x1, y1, z1) {
  return {
    x: x1 - 1,
    y: y1 - 1,
    z: z1 - 1
  };
}

function update(matrix, x, y, z, w) {
  const coords = fixCoordinates(x, y, z);
  matrix[coords.x][coords.y][coords.z] = w;
  return matrix;
}

function query(matrix, x1, y1, z1, x2, y2, z2) {
  const startCoords = fixCoordinates(x1, y1, z1);
  const endCoords = fixCoordinates(x2, y2, z2);
  let suma = 0;
  for (let i = startCoords.x; i <= endCoords.x; i++) {
    for (let j = startCoords.y; j <= endCoords.y; j++) {
      for (let k = startCoords.z; k <= endCoords.z; k++) {
        suma += parseInt(matrix[i][j][k]);
      }
    }
  }
  return suma;
}

function cubeSummation(input){
  const lines = input.replace('\r\n', '\n').split('\n');
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
        update(matrix, oper.x, oper.y, oper.z, oper. w);
      } else if (oper.operation === 'QUERY'){
        output += query(matrix, oper.x1, oper.y1, oper.z1, oper.x2, oper.y2, oper.z2) + '\n';
      }
      current++;
    }
  }
  return output.replace(/\n$/,'');
}

module.exports =  {
  update: update,
  query: query,
  cubeSummation: cubeSummation
};
