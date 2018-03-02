document.querySelector('#searchForm').addEventListener('submit', getWeather);

function getWeather(e) {

    const city = document.querySelector('#cityInput').value;
    const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=f33ab95e615dc5a7c3c725a9b8e4e80f';
    const appKey = 'f33ab95e615dc5a7c3c725a9b8e4e80f';

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))

    e.preventDefault();
}