import { getWeatherToday } from "./weather-today";
import { foreCast } from "./weather-week";
import { clearInput } from "./clear-input";
import { appKey } from "./token";
import { showDiv } from "./show-div";

document.querySelector("#searchForm").addEventListener("submit", getWeatherDay);

function getWeatherDay(e) {
  const city = document.querySelector("#cityInput").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      getWeatherToday(data);
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
    .then(data => foreCast(data));
  showDiv();
}
