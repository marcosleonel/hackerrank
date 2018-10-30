// Complete the angryProfessor function below.
function angryProfessor(k, a) {
	let onTime = 0;

  for (let time of a) {
    if (time <= 0) {
      onTime++;
    }
  }

  let response = onTime < k ? 'YES' : 'NO';

  return response;
}
