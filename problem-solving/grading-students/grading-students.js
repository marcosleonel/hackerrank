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
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
  let roundedGrades = [];
  
  for (let grade of grades) {
    
    if (grade >= 38) {  
      let reminder = grade % 5;
      
      if (reminder >= 3) {
        let addition = 5 - reminder;
        let roundedNumber = grade + addition;
        roundedGrades.push(roundedNumber);
      } else {
        roundedGrades.push(grade);
      }
      
    } else {
      roundedGrades.push(grade);
    }
  }
  
  return roundedGrades;
}
/******************************************************************************/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
