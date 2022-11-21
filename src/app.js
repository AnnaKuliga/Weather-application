// TIME AND CALENDAR
function showFullTime() {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  setInterval(showFullTime, 1000);
  let days = [
    `SUNDAY`,
    `MONDAY`,
    `TUESDAY`,
    `WEDNESDAY`,
    `THURSDAY`,
    `FRIDAY`,
    `SATURDAY`,
  ];
  let currentDay = days[date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentMonth = months[date.getMonth()];
  let dateDay = date.getDate();
  {
    if (dateDay < 10) {
      dateDay = `0${dateDay}`;
    }
  }

  let currentYear = date.getFullYear();

  let currentTime = document.querySelector("#show-time");
  currentTime.innerHTML = `${hours} : ${minutes} : ${seconds}<br/> ${currentDay} <br/> ${currentMonth}, ${dateDay}, ${currentYear}`;
}
showFullTime();

// SEARCH ENGINE

function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}km/h`;

  let description = document.querySelector("#main-description");
  description.innerHTML = response.data.weather[0].main;
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  let apiKey = "6643c7326a4c2a38838264a28531d97e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function showLocation(position) {
  let apiKey = "6643c7326a4c2a38838264a28531d97e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}
let form = document.querySelector("#search-city-bar");
form.addEventListener("submit", showCity);

let gpsButton = document.querySelector("#gps");
gpsButton.addEventListener("click", getLocation);
// ch 3 week 3

//function unitCelcius(event) {
//  event.preventDefault();
//  let currentTemp = document.querySelector("#current-temp");
// currentTemp.innerHTML = "12°";
//}

//function unitFarenheit(event) {
//  event.preventDefault();
//  let currentTemp = document.querySelector("#current-temp");
//  currentTemp.innerHTML = "78°";
//}

//let celcius = document.querySelector("#celcius");
//let farenheit = document.querySelector("#fahrenheit");
//celcius.addEventListener("click", unitCelcius);
//farenheit.addEventListener("click", unitFarenheit);
