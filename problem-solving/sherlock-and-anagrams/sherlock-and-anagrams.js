// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  let stringArr = s.split('');
  let reversedS = stringArr.reverse().join('');
  let occurrences = 0;

  for (let i = 0; i <= s.length; i++) {
		let subS = s.substring(0, i + 1);
		let sToCheck = reversedS.substring(0, (reversedS.length - subS.length) + 1);

		for(let j = 0; j <= sToCheck.length; j++) {
			let match = sToCheck.indexOf(subS, j);

			if(match > -1) {
				occurrences++;
			}
		}
  }

  return occurrences;
}
