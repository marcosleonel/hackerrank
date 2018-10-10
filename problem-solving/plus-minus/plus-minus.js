'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
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

// Complete the plusMinus function below.
function plusMinus(arr) {
  const arrSize = arr.length;
  
  let positiveCounter = 0;
  let negativeCounter = 0;
  let zeroCounter = 0;
  
  for (let item of arr) {
    if (item > 0) {
      positiveCounter++;
    } else if (item < 0) {
      negativeCounter++;
    } else {
      zeroCounter++;
    }
  }
  
  const positiveFraction = positiveCounter / arrSize;
  const negativeFraction = negativeCounter / arrSize;
  const zeroFraction = zeroCounter / arrSize;
  
  console.log(positiveFraction.toFixed(6));
  console.log(negativeFraction.toFixed(6));
  console.log(zeroFraction.toFixed(6));
}
/******************************************************************************/

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}