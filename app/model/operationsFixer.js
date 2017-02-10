function fixOperation(line) {
  // Line must be a string like 'UPDATE 2 2 2 4'
  const operationElement = line.split(' ');
  if (operationElement[0] === 'UPDATE'){
    return {
      operation: operationElement[0],
      x: operationElement[1],
      y: operationElement[2],
      z: operationElement[3],
      w: operationElement[4]
    };
  } else if (operationElement[0] === 'QUERY'){
    return {
      operation: operationElement[0],
      x1: operationElement[1],
      y1: operationElement[2],
      z1: operationElement[3],
      x2: operationElement[4],
      y2: operationElement[5],
      z2: operationElement[6],
    };
  } else {
    return new Error('No valid operation');
  }

}

module.exports = {
  fixOperation: fixOperation
};
