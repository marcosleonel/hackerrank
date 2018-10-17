// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  let answer = 'NO';

  for (let i = 0; i <= 10000; i++) {
    let onePosition = (v1 * i) + x1;
    let twoPosition = (v2 * i) + x2;

    if (onePosition === twoPosition) {
      answer = 'YES';
      i = 9999;
    }
  }

  return answer;
}
