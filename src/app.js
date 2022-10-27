function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = math.round(response.data.main.temp);
  cityElement.innerHTML = math.round(response.data.name);
  descriptionElement.innerHTML = math.round(
    response.data.weather[0].description
  );
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = math.round(response.data.main.wind);
}

let apiKey = "2e5b6f97a330658a59719220e02b26a0";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid={apiKey}&units=metric";

axios.get(apiUrl).then(displayTemperature);
