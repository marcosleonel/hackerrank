// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  let max = Math.max(...ar);
  let candlesBlowed = 0;

  ar.map( item => {
    if (item === max) {
      candlesBlowed++;
    }
  });

  return candlesBlowed;
}
