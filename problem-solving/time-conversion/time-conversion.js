'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/******************************************************************************
 *  SOLUTION
 ******************************************************************************/

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  let splittedTime = s.split(':');
  
  let hour = Number(splittedTime[0]);
  let minutes = splittedTime[1];
  let seconds = splittedTime[2].substring(0, 2);
  let period = splittedTime[2].substring(2, 4);
  
  if (hour <= 12) {
    if (period === 'PM' && hour != 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = '00';
    } else if (hour < 10) {
      hour = `0${hour}`;
    }
  }
  
  let convertedTime = `${hour}:${minutes}:${seconds}`;
  
  return convertedTime;
}
/******************************************************************************/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
