function clearContents() {
  const currentContainer = document.querySelector(".current-container");
  const titleContainer = document.querySelector(".title-container");
  const dayDivs = document.querySelectorAll(".day");

  currentContainer.textContent = "";
  titleContainer.textContent = "";

  for (let d = 0; d < dayDivs.length; d++) {
    dayDivs[d].textContent = "";
  }
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

function drawFiveDayForecast(days) {
  const dayDivs = document.querySelectorAll(".day");

  for (let d = 0; d < dayDivs.length; d++) {
    const forecastIconDiv = document.createElement("img");
    const highLowDiv = document.createElement("div");

    import(`./icons/${days[d + 1].icon}.svg`).then((icon) => {
      forecastIconDiv.src = icon.default;
    });

    forecastIconDiv.classList.add("forecastIconDiv");
    highLowDiv.classList.add("highLowDiv");
    highLowDiv.textContent = `${days[d + 1].tempmaxC}° / ${days[d + 1].tempminC}°`;
    dayDivs[d].appendChild(forecastIconDiv);
    dayDivs[d].appendChild(highLowDiv);
  }
}

export function drawWeather(weather) {
  clearContents();
  drawLocation(weather.location);
  drawCurrentWeather(weather.sixDayArray[0]);
  drawFiveDayForecast(weather.sixDayArray);
}
