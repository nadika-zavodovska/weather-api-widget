const button = document.querySelector(".button-search");

button.addEventListener("click", () => {
  const city = document.querySelector(".input-city").value;
  console.log(city);
  const APIKey = "cbf07be48bf5aa4c8a899dbaceb6d097";
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

      pressure.textContent = data.main.pressure;
      cityName.textContent = data.name;
      temperature.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
      icon.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='icon weather'/>`;
      description.textContent = data.weather[0].description;
      windDegree.innerHTML = `${data.wind.deg} <span>°</span>`;
      windSpeed.innerHTML = `${data.wind.speed} <span>metres/sec</span>`;
    });
});
