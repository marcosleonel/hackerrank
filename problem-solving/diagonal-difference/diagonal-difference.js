'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/******************************************************************************
 *  SOLUTION
 ******************************************************************************/

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

/******************************************************************************/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
