// Make a request from open weather api api.openweathermap.org/data/2.5/weather?q={city}&appid=4da7e530effb30d411db83fdc81cf22f and convert results to section class="weather-info"

// const apiUrlCelsius = `api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=4da7e530effb30d411db83fdc81cf22f&units=metric`;
const searchButton = document.querySelector("#search");
// Section where to append data from api
const weatherInfo = document.querySelector(".weather-info");
// Select Fahrenheit
const imperial = document.querySelector("#imperial");
// Select Celsius
const metric = document.querySelector("#metric");

// Fetch weather data
async function fetchData() {
  removeWeather();
  try {
    const textInput = document.querySelector("input").value;
    const apiUrlFahrenheit = `http://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=4da7e530effb30d411db83fdc81cf22f&units=imperial`;
    let response = await axios.get(apiUrlFahrenheit);
    // console.log(response.data);
    let weatherData = response.data;
    showWeatherData(weatherData);
    return weatherData;
  } catch (error) {
    console.error(error);
    let errorText = `
    <p class="errorText">Sorry, we couldn't find anything. Make sure your location name is spelled correctly or try another one (e.g. Toronto).</p>
    `;
    weatherInfo.insertAdjacentHTML("beforeend", errorText);
  }
}

// Create new elements and append them to .weather-info - dynamic HTML
function showWeatherData(data) {
  let weatherIcon = data.weather[0].icon;
  let weatherElements = `
  <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png"/>
  <h1>${data.name} | ${data.sys.country}</h1>
  <h2>${data.weather[0].main}</h2>
  <p class="main-temp">${data.main.temp}&#176 F</p>
  <p class="other-temp">H: ${data.main.temp_max}&#176 F &#160 L: ${data.main.temp_min}&#176 F</p>
  <h2>FEELS LIKE ${data.main.feels_like}&#176 F</h2>
  <p>WIND ${data.wind.speed} mph</p>
  `;
  weatherInfo.insertAdjacentHTML("beforeend", weatherElements);
}

// Dynamically search movie using button with eventHandler
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});

// Display weather data in Fahrenheit
imperial.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});

// // Display weather data in Celsius
// metric.addEventListener("click", (e) => {
//   e.preventDefault();
//   fetchData();
// });

// Remove previous weather search results
function removeWeather() {
  const removeElement = document.querySelector(".weather-info");
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild);
  }
}
