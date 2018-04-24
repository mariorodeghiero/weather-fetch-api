import { getWeatherToday } from "./weather-today";
import { forecast } from "./faracast-fahrenheit";
import { forecastCelsius } from "./forecast-celsius";
import { clearInput } from "./clear-input";
import { appKey } from "./token";
import { showDiv, hideDiv } from "./show-hide-div";

let icon = document.querySelector("#icon-div");
let details = document.querySelector("#details-div");
let setTemp = document.getElementById("set-temp");
document.querySelector("#searchForm").addEventListener("submit", getWeatherDay);

function getWeatherDay(e) {
  hideDiv();
  const city = document.querySelector("#cityInput").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      getWeatherToday(data, icon, details);
      getWeatherWeek(data.name);
      console.log(data);
    })
    .catch(err => console.log(err));

  clearInput();
  e.preventDefault();
}

/**
 * function get forecast weather week
 */
function getWeatherWeek(city) {
  const urlForeCast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appKey}`;

  fetch(urlForeCast)
    .then(response => response.json())
    .then(
      data =>
        setTemp.checked == false ? forecast(data) : forecastCelsius(data)
    );
  setInterval(function() {
    showDiv();
  }, 500);
}
