// Complete the timeInWords function below.
function timeInWords(h, m) {
  let timeString = '';
  let numberString = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
		'twenty',
		'twenty one',
		'twenty two',
		'twenty three',
		'twenty four',
		'twenty five',
		'twenty six',
		'twenty seven',
		'twenty eight',
		'twenty nine'
	];

  if (m === 0) {
    timeString = `${numberString[h]} o' clock`;
  } else if (m === 1) {
    timeString = `${numberString[m]} minute past ${numberString[h]}`;
  } else if (m >= 2 && m <= 30) {
    if (m === 15) {
      timeString = `quarter past ${numberString[h]}`;
    } else if (m ===  30) {
      timeString = `half past ${numberString[h]}`;
    } else {
      timeString = `${numberString[m]} minutes past ${numberString[h]}`;
    }
  } else {
		let minutesRemaining = 60 - m;
    if (minutesRemaining === 1) {
			timeString = `${numberString[minutesRemaining]} minute to ${numberString[h + 1]}`;
		} else if (minutesRemaining === 15) {
			timeString = `quarter to ${numberString[h + 1]}`;
    } else {
      timeString = `${numberString[minutesRemaining]} minutes to ${numberString[h + 1]}`;
    }
  }

  return timeString;
}
