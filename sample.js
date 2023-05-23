const apiKey = '3033e93cfe92d0c5e5600af8e634d2df';

function getWeather() {
  const location = document.getElementById('location').value;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let weatherHTML = '';
      let currentDay = '';

      data.list.forEach(weather => {
        const date = new Date(weather.dt_txt);
        const dayOfWeek = days[date.getDay()];

        if (dayOfWeek !== currentDay) {
          weatherHTML += `
            <div>
              <h2>${dayOfWeek}</h2>
              <p>Description: ${weather.weather[0].description}</p>
              <p>Temperature: ${weather.main.temp} &deg;C</p>
              <p>Humidity: ${weather.main.humidity} %</p>
              <p>Wind Speed: ${weather.wind.speed} m/s</p>
            </div>
          `;
          currentDay = dayOfWeek;
        }
      });

      document.getElementById('weather').innerHTML = weatherHTML;
      Notification.requestPermission(p=>{
        if(p==='granted'){
          new Notification("Weather details",{
            body: "weather fetched successfully"
          })
        }
      })
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const errorHTML = `<p>Error fetching weather data. Please try again later.</p>`;
      document.getElementById('weather').innerHTML = errorHTML;
    });
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  getWeather();
});

