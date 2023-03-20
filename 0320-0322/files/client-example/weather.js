// {
//   "status": "sunny",
//   "temperature": "19",
//   "findust": "good"
// }

function createWeatherDiv() {
  const div = document.createElement("div");
  div.className = "weather-item";
  const status = document.createElement("div");
  status.className = "status";
  const temperature = document.createElement("div");
  temperature.className = "temperature";
  const findust = document.createElement("div");
  findust.className = "findust";
  div.appendChild(status);
  div.appendChild(temperature);
  div.appendChild(findust);
  return div;
}

function renderWeather(data) {
  const weatherContainer = document.querySelector("#weather-container");
  const weatherItem = createWeatherDiv();
  const { status, temperature, findust } = data;
  weatherItem.querySelector(".status").textContent = status;
  weatherItem.querySelector(".temperature").textContent = temperature;
  weatherItem.querySelector(".findust").textContent = findust;
  weatherContainer.appendChild(weatherItem);
}

function getWeather() {
  fetch("http://localhost:5000/data/mini-weather")
    .then((res) => res.json())
    .then((res) => {
      renderWeather(res);
    });
}

function resetWeather() {
  const weatherContainer = document.querySelector("#weather-container");
  weatherContainer.innerHTML = "";
}
