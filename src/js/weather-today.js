import { celsius, fahrenheit } from "./convert-temp";
import { getMinute, getDateHour } from "./convert-hour-date";
import { selectIcon } from "./select-icon";
import { titleCase } from "./title-case";

function getWeatherToday(data, icon, details) {
  icon.innerHTML = `
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

  details.innerHTML = `
          <h2 >${data.name}, ${data.sys.country}</h2>
          <br>
          <section>
            <h3>${getDateHour()}</h3>
            <h3>${titleCase(data.weather[0].description)}</h3>
          </section>
          `;
}

export { getWeatherToday };
