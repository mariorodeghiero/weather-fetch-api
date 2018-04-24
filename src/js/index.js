import { getWeatherToday } from "./weather-today";
import { forecast } from "./faracast-fahrenheit";
import { forecastCelsius } from "./forecast-celsius";
import { clearInput } from "./clear-input";
import { appKey } from "./token";
import { showOutPut, hideOutPut } from "./show-hide";

let setTemp = document.getElementById("set-temp");
document.querySelector("#searchForm").addEventListener("submit", getWeather);

function getWeather(e) {
  const city = document.querySelector("#cityInput").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appKey}`;
  hideOutPut();

  fetch(url)
    .then(response => response.json())
    .then(data => {
      getWeatherToday(data);
      getWeatherWeek(data.name);
    })
    .catch(err => console.log(err));
  clearInput();
  e.preventDefault();
}

function getWeatherWeek(city) {
  const urlForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appKey}`;

  fetch(urlForecast)
    .then(response => response.json())
    .then(
      data =>
        setTemp.checked == false ? forecast(data) : forecastCelsius(data)
    );
  setInterval(function() {
    showOutPut();
  }, 500);
}
