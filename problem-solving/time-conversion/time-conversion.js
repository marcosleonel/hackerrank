/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  let splittedTime = s.split(':');
  
  let hour = Number(splittedTime[0]);
  let minutes = splittedTime[1];
  let seconds = splittedTime[2].substring(0, 2);
  let period = splittedTime[2].substring(2, 4);
  
  if (hour <= 12) {
    if (period === 'PM' && hour != 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = '00';
    } else if (hour < 10) {
      hour = `0${hour}`;
    }
  }
  
  let convertedTime = `${hour}:${minutes}:${seconds}`;
  
  return convertedTime;
}
