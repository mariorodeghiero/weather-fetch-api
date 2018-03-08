const appKey = "f33ab95e615dc5a7c3c725a9b8e4e80f";
document.querySelector("#searchForm").addEventListener("submit", getWeatherDay, getWeatherWeek);

function getWeatherDay(e) {
  const city = document.querySelector("#cityInput").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#icon-div").innerHTML = `
        <i class="icon ${selectIcon(data.weather[0].icon)}"/>
        <h2 class="active" href="#" id="fahrenheit">${Math.round(
          (data.main.temp - 273.15) * 1.8 + 32
        )}°F | ${Math.round(data.main.temp - 273.15)}°C</h2>
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
      console.log(data);
    })
    .catch(err => console.log(err));
  clearInput();
  e.preventDefault();
}

function titleCase(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

function clearInput() {
  document.getElementById("searchForm").reset();
}

function getMinute(time) {
  let min = ("0" + time.getMinutes()).slice(-2);
  return min;
}

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
    "50": "wi wi-fog",
  }
  return iconMap[N] ? iconMap[N] : "wi wi-day-sunny";
};

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

/**
 * function forecast weather week
 */

function getWeatherWeek(e, city) {

  const url = `api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
  e.preventDefault();
}