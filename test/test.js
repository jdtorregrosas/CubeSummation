const assert = require('assert');
const m = require('../app/model/matrix');
const op = require('../app/model/operation');
const fix = require('../app/model/operationsFixer');

describe('# 3D Matrix', () => {
  describe('matrix creation', () => {
    it('should create a matrix with length n', () => {
      const matrix = m.createMatrix(5);
      assert.equal(matrix.length, 5);
    });
    it('should create a zeros filled 3d matrix of n dimensions', () => {
      const matrix = m.createMatrix(5);
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

describe('# Operations', () => {
  describe('Update', () => {
    it('should return a matrix with the given value on the given point', () => {
      const x = 1, y = 1,z = 1;
      const w = 10;

      const matrix = m.createMatrix(5);
      const updatedMatrix = op.update(matrix, x, y, z, w);
      assert.equal(updatedMatrix[x-1][y-1][z-1], w);
    });
    it('should not return the given value on the wrong point', () => {
      const x = 1, y = 1,z = 1;
      const w = 10;

      const matrix = m.createMatrix(5);
      const updatedMatrix = op.update(matrix, x, y, z, w);
      for(let i = 0; i < updatedMatrix.length; i++){
        for(let j = 0; j < updatedMatrix.length; j++){
          for(let k = 0; k < updatedMatrix.length; k++){
            if(i!==x-1 && j!==y-1 && k!==z-1){
              assert.equal(updatedMatrix[i][j][k], 0);
            }
          }
        }
      }
    });
    describe('Fix Update', () => {
      it('should return an object with update operation type', () => {
        const fixed = fix.fixOperation('UPDATE 1 2 3 4');
        assert.equal(fixed.operation, 'UPDATE');
      });
      it('should return an object with update with X', () => {
        const fixed = fix.fixOperation('UPDATE 1 2 3 4');
        assert.equal(fixed.x, 1);
      });
      it('should return an object with update with Y', () => {
        const fixed = fix.fixOperation('UPDATE 1 2 3 4');
        assert.equal(fixed.y, 2);
      });
      it('should return an object with update with Z', () => {
        const fixed = fix.fixOperation('UPDATE 1 2 3 4');
        assert.equal(fixed.z, 3);
      });
      it('should return an object with update with W', () => {
        const fixed = fix.fixOperation('UPDATE 1 2 3 4');
        assert.equal(fixed.w, 4);
      });
    });
  });
  describe('Query', () => {
    it('should return the sum between the given limits', () => {
      const x1 = 2, y1 = 2, z1 = 2;
      const x2 = 4, y2 = 4, z2 = 4;
      let matrix = m.createMatrix(4);
      matrix = op.update(matrix, 1, 1, 1, 23); // SUM: 0
      matrix = op.update(matrix, 2, 2, 2, 2); // SUM: 2
      matrix = op.update(matrix, 1, 2, 3, 3); // SUM: 2
      matrix = op.update(matrix, 4, 4, 4, 4); // SUM: 6
      const trueResult = 6;
      const queryResult = op.query(matrix, x1, y1, z1, x2, y2, z2);
      assert.equal(queryResult, trueResult);
    });
    describe('Fix Query', () => {
      it('should return an object with update operation type', () => {
        const fixed = fix.fixOperation('QUERY 1 1 1 3 3 3');
        assert.equal(fixed.operation, 'QUERY');
      });
      it('should return an object with update with X1', () => {
        const fixed = fix.fixOperation('QUERY 1 2 3 4 5 6');
        assert.equal(fixed.x1, 1);
      });
      it('should return an object with update with Y1', () => {
        const fixed = fix.fixOperation('QUERY 1 2 3 4 5 6');
        assert.equal(fixed.y1, 2);
      });
      it('should return an object with update with Z1', () => {
        const fixed = fix.fixOperation('QUERY 1 2 3 4 5 6');
        assert.equal(fixed.z1, 3);
      });

      it('should return an object with update with X2', () => {
        const fixed = fix.fixOperation('QUERY 1 2 3 4 5 6');
        assert.equal(fixed.x2, 4);
      });
      it('should return an object with update with Y2', () => {
        const fixed = fix.fixOperation('QUERY 1 2 3 4 5 6');
        assert.equal(fixed.y2, 5);
      });
      it('should return an object with update with Z2', () => {
        const fixed = fix.fixOperation('QUERY 1 2 3 4 5 6');
        assert.equal(fixed.z2, 6);
      });
    });
  });
  describe('Fix Setup', () => {
    it('should return an object with size of the matrix', () => {
      const fixed = fix.fixSetup('3 5');
      assert.equal(fixed.size, 3);
    });
    it('should return an object with the number of queries', () => {
      const fixed = fix.fixSetup('3 5');
      assert.equal(fixed.queries, 5);
    });
  });
});
