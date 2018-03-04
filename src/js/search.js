document.querySelector("#searchForm").addEventListener("submit", getWeather);

function getWeather(e) {
  const city = document.querySelector("#cityInput").value;
  const appKey = "f33ab95e615dc5a7c3c725a9b8e4e80f";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appKey}`;
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

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#icon-div").innerHTML = `
        <i class="icon wi wi-day-sunny"></i>
        <h2 class="active" href="#" id="fahrenheit">${Math.round(
          (data.main.temp - 273.15) * 1.8 + 32
        )}°F | ${Math.round(data.main.temp - 273.15)}°C</h2>
        <br>
            <h3>Wind: ${data.wind.speed} mph</h3>
            <h3>Humidity: ${data.main.humidity}%</h3>
        <br>
      `;
      document.querySelector("#details-div").innerHTML = `
          <h2 class="details" id="city">${data.name}, ${data.sys.country}</h2>
          <br>
          <section>
            <h3>${dayName[now.getDay()]} ${now.getHours()}:${getMinute(
        now
      )}</h3>
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
    .map(function(word) {
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
