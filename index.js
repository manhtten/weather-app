// Temperature Update
function changeTemperature(response) {
  let temperatureElement = document.querySelector(".temp");
  let newTemperature = Math.round(response.data.temperature.current);
  let preCity = document.querySelector("#current-location");
  let submittedCity = response.data.city;
  temperatureElement.innerHTML = `${newTemperature}`;
  preCity.innerHTML = `${submittedCity}`;
}

// City Input
function cityReveal(event) {
  event.preventDefault();
  let searchBox = document.querySelector("#city-input");
  let cityElement = searchBox.value;
  let apiKey = "48fbeba974f73tcce3370ao1a52849de";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityElement}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(changeTemperature);
}

let cityForm = document.querySelector("#city-search-form");
cityForm.addEventListener("submit", cityReveal);

// Time and Date
let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let day = currentTime.getDay();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let formattedDay = days[day];

currentDate.innerHTML = `${formattedDay} ${hours}:${minutes}`;
