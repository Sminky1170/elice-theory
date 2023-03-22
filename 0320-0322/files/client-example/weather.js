function createWeatherDiv() {
  const div = document.createElement("div");
  div.className = "weather-item";
  const status = document.createElement("input");
  status.className = "status";
  const temperature = document.createElement("input");
  temperature.className = "temperature";
  const findust = document.createElement("input");
  findust.className = "findust";
  status.classList.add("input");
  temperature.classList.add("input");
  findust.classList.add("input");
  div.appendChild(status);
  div.appendChild(temperature);
  div.appendChild(findust);

  const updateButton = document.createElement("button");
  updateButton.className = "update-button";
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", async () => {
    const status = div.querySelector(".status").value;
    const temperature = div.querySelector(".temperature").value;
    const findust = div.querySelector(".findust").value;
    const msg = await updateWeather({ status, temperature, findust });
    resetWeather();
    const weatherContainer = document.querySelector("#weather-container");
    weatherContainer.appendChild(document.createTextNode(msg));
  });
  div.appendChild(updateButton);
  return div;
}

function renderWeather(data) {
  const weatherContainer = document.querySelector("#weather-container");
  const weatherItem = createWeatherDiv();
  const { status, temperature, findust } = data;
  weatherItem.querySelector(".status").value = status;
  weatherItem.querySelector(".temperature").value = temperature;
  weatherItem.querySelector(".findust").value = findust;
  weatherContainer.appendChild(weatherItem);
}

function updateWeather(data) {
  return fetch("http://localhost:5000/data/mini-weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
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
