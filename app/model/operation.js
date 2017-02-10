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

module.exports =  {
  update: update,
  query: query
};
