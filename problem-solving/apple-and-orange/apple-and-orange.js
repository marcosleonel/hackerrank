// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let apple of apples) {
    let applePosition = apple + a;

    if (applePosition >= s && applePosition <= t) {
      appleCount++;
    }
  }

  for (let orange of oranges) {
    let orangePosition = orange + b;

    if (orangePosition >= s && orangePosition <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
