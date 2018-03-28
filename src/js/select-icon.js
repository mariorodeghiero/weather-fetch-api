/**
 * function select icon
 */

function selectIcon(code) {
  const N = code.replace(/\D/g, "");
  const iconMap = {
    "01": "wi wi-day-sunny",
    "02": "wi wi-night-cloudy",
    "03": "wi wi-cloud",
    "04": "wi wi-cloudy",
    "09": "wi wi-showers",
    "10": "wi wi-rain",
    "11": "wi wi-thunderstorm",
    "13": "wi wi-snow-wind",
    "50": "wi wi-fog"
  };
  return iconMap[N] ? iconMap[N] : "wi wi-day-sunny";
}

export { selectIcon };
