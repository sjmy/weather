function clearContents() {
  const currentContainer = document.querySelector(".current-container");
  const titleContainer = document.querySelector(".title-container");

  currentContainer.textContent = "";
  titleContainer.textContent = "";
}

function drawLocation(location) {
  const currentContainer = document.querySelector(".current-container");
  const titleContainer = document.querySelector(".title-container");

  titleContainer.textContent = location;
  currentContainer.before(titleContainer);
}

function drawCurrentWeather(today) {
  const currentContainer = document.querySelector(".current-container");
  const iconDiv = document.createElement("img");
  const currentConditionsDiv = document.createElement("div");
  const actualTemp = document.createElement("div");
  const feelsLike = document.createElement("div");
  const conditions = document.createElement("div");

  import(`./icons/${today.icon}.svg`).then((icon) => {
    iconDiv.src = icon.default;
  });

  iconDiv.classList.add("iconDiv");
  currentConditionsDiv.classList.add("currentConditionsDiv");
  actualTemp.classList.add("actualTemp");
  feelsLike.classList.add("feelsLike");
  conditions.classList.add("description");
  actualTemp.textContent = `${today.tempC}°`;
  feelsLike.textContent = `Feels like: ${today.feelslikeC}°`;
  conditions.textContent = `${today.conditions}`;
  currentConditionsDiv.appendChild(conditions);
  currentConditionsDiv.appendChild(actualTemp);
  currentConditionsDiv.appendChild(feelsLike);
  currentContainer.appendChild(iconDiv);
  currentContainer.appendChild(currentConditionsDiv);
}

function drawCurrentWeatherDetails(today) {
  const currentDetails = document.querySelector(".current-details");
}

export function drawWeather(weather) {
  clearContents();
  drawLocation(weather.location);
  drawCurrentWeather(weather.sixDayArray[0]);
  drawCurrentWeatherDetails(weather.sixDayArray[0]);
}
