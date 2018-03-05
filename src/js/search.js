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

function selectIcon(code) {
  switch (code) {
    case "01d":
    case "01n":
      return `wi wi-day-sunny`;
      break;
    case "02d":
    case "02n":
      return `wi wi-night-cloudy`;
      break;
    case "03d":
    case "03n":
      return `wi wi-cloud`;
      break;
    case "04d":
    case "04n":
      return `wi wi-cloudy`;
      break;
    case "09d":
    case "09n":
      return `wi wi-showers`;
      break;
    case "10d":
    case "10n":
      return `wi wi-rain`;
      break;
    case "11d":
    case "11n":
      return `wi wi-thunderstorm`;
      break;
    case "13d":
    case "13n":
      return `wi wi-snow-wind`;
      break;
    case "50d":
    case "50n":
      return `wi wi-fog`;
      break;
    default:
      return `wi wi-day-sunny`;
      break;
  }
}
