// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  let stringArr = s.split('');
  let reversedS = stringArr.reverse().join('');
  let occurrences = 0;

  for (let i = 0; i <= s.length; i++) {
		let subS = s.substring(0, i + 1);
		let subRegex = new RegExp(subS, 'g');

		if (i === 1) {
			occurrences += (reversedS.match(subRegex) || []).length - 1;
		} else {
			occurrences += (reversedS.match(subRegex) || []).length;
		}
  }

  return occurrences;
}
