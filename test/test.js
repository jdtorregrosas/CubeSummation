const assert = require('assert');
const m = require('../app/matrix');

describe('# 3D Matrix', function() {
  describe('matrixCreate()', function() {
    it('should create a matrix with length n', function() {
      let matrix = m.createMatrix(5);
      assert.equal(matrix.length, 5);
    });
    it('should create a zeros filled 3d matrix of n dimensions', function() {
      let matrix = m.createMatrix(5);
      assert.equal(matrix.length, 5);
      for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
          for(let k = 0; k < matrix.length; k++){

            assert.equal(matrix[i][j][k], 0);
          }
        }
      }
    });
  });
});
