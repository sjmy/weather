import { format } from "date-fns";

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
  const tempDiv = document.createElement("div");
  const actualTemp = document.createElement("div");
  const celcius = document.createElement("div");
  const fahrenheit = document.createElement("div");
  const divider = document.createElement("div");
  const feelsLike = document.createElement("div");
  const conditions = document.createElement("div");

  import(`./icons/${today.icon}.svg`).then((icon) => {
    iconDiv.src = icon.default;
  });

  iconDiv.classList.add("iconDiv");
  currentConditionsDiv.classList.add("currentConditionsDiv");
  tempDiv.classList.add("tempDiv");
  actualTemp.classList.add("actualTemp");
  feelsLike.classList.add("feelsLike");
  celcius.classList.add("celcius");
  fahrenheit.classList.add("fahrenheit");
  divider.classList.add("divider");
  conditions.classList.add("description");
  actualTemp.textContent = `${today.tempC}°`;
  celcius.textContent = "C°";
  fahrenheit.textContent = "F°";
  divider.textContent = "/";
  feelsLike.textContent = `Feels like: ${today.feelslikeC}°`;
  conditions.textContent = `${today.conditions}`;
  tempDiv.appendChild(actualTemp);
  tempDiv.appendChild(celcius);
  tempDiv.appendChild(divider);
  tempDiv.appendChild(fahrenheit);
  currentConditionsDiv.appendChild(conditions);
  currentConditionsDiv.appendChild(tempDiv);
  currentConditionsDiv.appendChild(feelsLike);
  currentContainer.appendChild(iconDiv);
  currentContainer.appendChild(currentConditionsDiv);
}

function drawFiveDayForecast(days) {
  const dayDivs = document.querySelectorAll(".day");

  for (let d = 0; d < dayDivs.length; d++) {
    const dateDiv = document.createElement("div");
    const forecastIcon = document.createElement("img");
    const highLowDiv = document.createElement("div");

    import(`./icons/${days[d + 1].icon}.svg`).then((icon) => {
      forecastIcon.src = icon.default;
    });

    if (d === 0) {
      dateDiv.textContent = "Tomorrow";
    } else {
      dateDiv.textContent = `${format(days[d + 1].datetime, "ccc, LLL d")}`;
    }

    dateDiv.classList.add("dateDiv");
    forecastIcon.classList.add("forecastIcon");
    highLowDiv.classList.add("highLowDiv");
    highLowDiv.textContent = `${days[d + 1].tempmaxC}° / ${days[d + 1].tempminC}°`;
    dayDivs[d].appendChild(dateDiv);
    dayDivs[d].appendChild(forecastIcon);
    dayDivs[d].appendChild(highLowDiv);
  }
}

export function drawLoading() {
  const currentContainer = document.querySelector(".current-container");
  currentContainer.textContent = "Loading ...";
}

export function drawWeather(weather) {
  clearContents();
  drawLocation(weather.location);
  drawCurrentWeather(weather.sixDayArray[0]);
  drawFiveDayForecast(weather.sixDayArray);
}
