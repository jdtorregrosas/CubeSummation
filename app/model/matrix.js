function createMatrix(size) {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = [];
      for (let k = 0; k < size; k++) {
        matrix[i][j][k] = 0;
      }
    }
  }
  return matrix;
}

module.exports = {
  createMatrix: createMatrix
};
