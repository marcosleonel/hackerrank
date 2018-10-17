// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
  const matrix = arr;
  const matrixSize = arr[0].length;

  let firstDiagonal = 0;
  let secondDiagonal = 0;

  let currentPosition = 0;

  matrix.forEach( row => {
    firstDiagonal += row[currentPosition] ? row[currentPosition] : 0;
    currentPosition++;
  });

  currentPosition = matrixSize - 1;

  matrix.forEach( row => {
    secondDiagonal += row[currentPosition] ? row[currentPosition] : 0;
    currentPosition--;
  });

  let absoluteDiff = firstDiagonal - secondDiagonal;

  return Math.abs(absoluteDiff);
}
