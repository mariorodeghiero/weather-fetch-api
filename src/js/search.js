import { celsius, fahrenheit } from "./convert-temp";
import { getMinute, getDateHour } from "./convert-hour-date";
import { selectIcon } from "./select-icon";
import { titleCase } from "./title-case";
import { clearInput } from "./clear-input";
import { appKey } from "./token";
import { showDiv } from "./show-div";
import { foreCast } from "./forecast";

document.querySelector("#searchForm").addEventListener("submit", getWeatherDay);

function getWeatherDay(e) {
  const city = document.querySelector("#cityInput").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#icon-div").innerHTML = `
        <i class="icon ${selectIcon(data.weather[0].icon)}"/>
        <h2 class="active" href="#" id="fahrenheit">${fahrenheit(
          data.main.temp
        )}°F | ${celsius(data.main.temp)}°C</h2>
        <br>
            <h3>
                Wind: ${data.wind.speed} mph
                <br>
                Humidity: ${data.main.humidity}%
            </h3>
        <br>
      `;

      document.querySelector("#details-div").innerHTML = `
          <h2 >${data.name}, ${data.sys.country}</h2>
          <br>
          <section>
            <h3>${getDateHour()}</h3>
            <h3>${titleCase(data.weather[0].description)}</h3>
          </section>
          `;
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
