import { celsius, fahrenheit } from "./convert-temp";
import { getMinute, getDateHour } from "./convert-hour-date";
import { selectIcon } from "./select-icon";

document.querySelector("#searchForm").addEventListener("submit", getWeatherDay);
const appKey = "f33ab95e615dc5a7c3c725a9b8e4e80f";

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

function titleCase(str) {
  return str
    .split(" ")
    .map(function(word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

function clearInput() {
  document.getElementById("searchForm").reset();
}

/**
 * function get forecast weather week
 */
function getWeatherWeek(city) {
  const urlForeCast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appKey}`;
  const arrayForecast = [2, 10, 18, 26, 34];

  fetch(urlForeCast)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let arrDate = [];

      arrayForecast.forEach(i => {
        let date = data.list[i].dt_txt
          .slice(5, 10)
          .split("-")
          .reverse()
          .join("/");

        arrDate.push(date);

        document.querySelector("#outPutForecast").innerHTML = `
        <div class="box">
          <h3>Mim</h3>
          <h3>Max</h3>
        </div>
        <div class="box" id="day-1">
          <h4>${arrDate[0]}</h4>
          <p>${fahrenheit(data.list[1].main.temp_max)}°F</p>
          <p>${fahrenheit(data.list[1].main.temp_min)}°F</p>
        </div>
        <div class="box" id="day-2">
          <h4>${arrDate[1]}</h4>
          <p>${fahrenheit(data.list[2].main.temp_max)}°F</p>
          <p>${fahrenheit(data.list[2].main.temp_min)}°F</p>
        </div>
        <div class="box" id="day-3">
          <h4>${arrDate[2]}</h4>
          <p>${fahrenheit(data.list[10].main.temp_max)}°F</p>
          <p>${fahrenheit(data.list[10].main.temp_min)}°F</p>
        </div>
        <div class="box" id="day-4">
          <h4>${arrDate[3]}</h4>
          <p>${fahrenheit(data.list[18].main.temp_max)}°F</p>
          <p>${fahrenheit(data.list[18].main.temp_min)}°F</p>
        </div>
        <div class="box-end" id="day-5">
          <h4>${arrDate[4]}</h4>
          <p>${fahrenheit(data.list[26].main.temp_max)}°F</p>
          <p>${fahrenheit(data.list[26].main.temp_min)}°F</p>
        </div>
        `;
      });
    });
}
