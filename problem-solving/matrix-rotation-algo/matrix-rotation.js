'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/******************************************************************************
 *  SOLUTION
 ******************************************************************************/
function matrixRotation(matrix, r) {
  let matrixTemp = matrix;
  let matrixRotation = matrix;
  let matrixFinal = [];
  let last = matrix.length - 1;
  
  for (let i = 0; i <= r; i++) {
      matrixRotation.map( (row, rowIndex, rowArr) => {
        if (rowIndex === 0) {
          row.map( (item, itemIndex, itemArr) => {
            switch (itemIndex) {
              case 0:
                moveDown(item, itemIndex, rowIndex);
                break;
              default:
                moveLeft(item, itemIndex, rowIndex);
                break;
            }
          });
        } else if (rowIndex === last) {
          row.map( (item, itemIndex, itemArr) => {
            switch (itemIndex) {
              case last:
                moveUp(item, itemIndex, rowIndex);
                break;
              default:
                moveRight(item, itemIndex, rowIndex);
            }
          });
        } else {
          row.map( (item, itemIndex, itemArr) => {
            switch (itemIndex) {
              case 0:
                moveDown(item, itemIndex, rowIndex);
                break;
              case last:
                moveUp(item, itemIndex, rowIndex);
                break;
              case 1 && !(rowIndex === last - 1):
                moveDown(item, itemIndex, rowIndex);
                break;
              case 1 && rowIndex === last - 1:
                moveRight(item, itemIndex, rowIndex);
                break;
              case last - 1 && !(rowIndex === 1):
                moveUp(item, itemIndex, rowIndex);
                break;
              case last - 1 && rowIndex === 1:
                moveLeft(item, itemIndex, rowIndex);
                break;
            }
        });
      }
    });
    
    matrixRotation = matrixTemp;
  }
  
  for (let line of matrixRotation) {
    console.log(...line);
  }
  
  function moveDown(item, itemIndex, rowIndex) {
    matrixTemp[rowIndex++][itemIndex] = item;
  }
  
  function moveRight(item, itemIndex, rowIndex) {
    matrixTemp[rowIndex][itemIndex++] = item;
  }
  
  function moveUp(item, itemIndex, rowIndex) {
    matrixTemp[rowIndex--][itemIndex] = item;
  }
  
  function moveLeft(item, itemIndex, rowIndex) {
    matrixTemp[rowIndex][itemIndex--] = item;
  }
}
/*****************************************************************************/

function main() {
    const mnr = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(mnr[0], 10);

    const n = parseInt(mnr[1], 10);

    const r = parseInt(mnr[2], 10);

    let matrix = Array(m);

    for (let i = 0; i < m; i++) {
        matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    }

    matrixRotation(matrix, r);
}
