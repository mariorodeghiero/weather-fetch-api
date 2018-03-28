/**
 * function get hour and Date
 */
function getDateHour() {
  let now = new Date();
  let dayName = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  return `${dayName[now.getDay()]} ${now.getHours()}:${getMinute(now)}`;
}

function getMinute(time) {
  let min = ("0" + time.getMinutes()).slice(-2);
  return min;
}

export { getMinute, getDateHour };
