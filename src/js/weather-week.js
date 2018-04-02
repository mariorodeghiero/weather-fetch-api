import { fahrenheit, celsius } from "./convert-temp";

const arrayForecast = [2, 10, 18, 26, 34];
let arrDate = [];

function foreCast(data) {
  arrayForecast.forEach(i => {
    let date = data.list[i].dt_txt
      .slice(5, 10)
      .split("-")
      .reverse()
      .join("/");

    arrDate.push(date);
  });

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
}

export { foreCast };
