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
