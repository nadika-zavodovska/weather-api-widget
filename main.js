const button = document.querySelector(".button-search");

function fetchWeather() {
  const city = document.querySelector(".input-city").value;
  const APIKey = "cbf07be48bf5aa4c8a899dbaceb6d097";

  if (city === "") {
    return;
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const pressure = document.querySelector(".pressure");
      const cityName = document.querySelector(".city");
      const temperature = document.querySelector(".temperature");
      const icon = document.querySelector(".icon");
      const description = document.querySelector(".description");
      const windDegree = document.querySelector(".wind-degree");
      const windSpeed = document.querySelector(".wind-speed");

      pressure.innerHTML = `${data.main.pressure} <span>mb</span/>`;
      cityName.textContent = data.name;
      temperature.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
      icon.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='icon weather'/>`;
      description.textContent = data.weather[0].description;
      windDegree.innerHTML = `${data.wind.deg} <span>°</span>`;
      windSpeed.innerHTML = `${data.wind.speed} <span>m/s</span>`;
    });
}

button.addEventListener("click", fetchWeather);
document
  .querySelector(".input-city")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      fetchWeather();
    }
  });

document.addEventListener("DOMContentLoaded", () =>
  document.querySelector(".button-search").click()
);
