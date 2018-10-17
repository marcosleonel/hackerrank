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

