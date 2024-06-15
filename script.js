document.addEventListener('DOMContentLoaded', () => {
  const apiKey = '91243036a8eab1e4c6ccf3d9e8afefd3'; // Replace with your actual OpenWeather API key
  const searchButton = document.getElementById('search-button');
  const inputField = document.getElementById('location-input');
  const weatherDisplay = document.getElementById('weather-display');
  const toggleButton = document.querySelector('.toggle-button');

  searchButton.addEventListener('click', () => {
    const location = inputField.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric')
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(error => weatherDisplay.innerHTML = 'Error fetching weather data');
  });

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  function displayWeather(data) {
    const location = data.name;
    const temperature = data.main.temp;
    const date = new Date().toLocaleString();
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherDisplay.innerHTML = `
      <h2>${location}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${windSpeed} m/s</p>
      <p>${date}</p>
    `;
  }
});
