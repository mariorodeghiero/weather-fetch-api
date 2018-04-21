import { getWeatherToday } from "./weather-today";
import { foreCast } from "./weather-week";
import { clearInput } from "./clear-input";
import { appKey } from "./token";
import { showDiv } from "./show-div";

let icon = document.querySelector("#icon-div");
let details = document.querySelector("#details-div");
document.querySelector("#searchForm").addEventListener("submit", getWeatherDay);
let button = document.getElementById("set-temp");
button.addEventListener("click", showDiv);

function getWeatherDay(e) {
  const city = document.querySelector("#cityInput").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appKey}`;

  if (button.checked == true) {
    alert("ok");
    console.log("------------------------------------");
    console.log("------------------------------------");
  }

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
    .then(data => foreCast(data));
  setInterval(function() {
    showDiv();
  }, 500);
}
