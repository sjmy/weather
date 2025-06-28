function drawLocation(location) {
  const currentContainer = document.querySelector(".current-container");
  const titleContainer = document.createElement("div");

  titleContainer.textContent = location;
  currentContainer.before(titleContainer);
}

function drawCurrentWeather(today) {
  const currentContainer = document.querySelector(".current-container");
  const iconDiv = document.createElement("div");
  const tempDiv = document.createElement("div");

  iconDiv.textContent = today.icon;
  tempDiv.textContent = `${today.tempC}°C`;
  currentContainer.appendChild(iconDiv);
  currentContainer.appendChild(tempDiv);
}

export function drawWeather(weather) {
  drawLocation(weather.location);
  drawCurrentWeather(weather.sixDayArray[0]);
  // console.log(`Location: ${location}`);
  // console.log(`Current temp: ${fiveDayArray[0].tempC} C`);
  // console.log(`Current conditions: ${fiveDayArray[0].conditions}`);
  // console.log(`Current humidity: ${fiveDayArray[0].humidity}`);
}
