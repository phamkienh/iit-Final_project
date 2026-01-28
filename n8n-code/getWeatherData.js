const forecastData = $('Get Weather Data').first().json;

const airForecastData = $('Get Air Pollution').first().json;

const currentWeather = forecastData.list[0];

const today = new Date();
today.setHours(0, 0, 0, 0); 
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1); 

const todayForecasts = forecastData.list.filter(item => {
  const forecastDate = new Date(item.dt * 1000);
  return forecastDate >= today && forecastDate < tomorrow;
});


const temps = todayForecasts.map(item => item.main.temp);
const highTemp = temps.length > 0 ? Math.max(...temps) : currentWeather.main.temp;
const lowTemp = temps.length > 0 ? Math.min(...temps) : currentWeather.main.temp;


const todayAirQuality = airForecastData.list.filter(item => {
  const forecastDate = new Date(item.dt * 1000);
  return forecastDate >= today && forecastDate < tomorrow;
});


if (todayAirQuality.length === 0) {
  todayAirQuality.push(airForecastData.list[0]);
}


const avgAQI = Math.round(
  todayAirQuality.reduce((sum, item) => sum + item.main.aqi, 0) / todayAirQuality.length
);

const avgCO = (
  todayAirQuality.reduce((sum, item) => sum + item.components.co, 0) / todayAirQuality.length
).toFixed(2);

const avgNO2 = (
  todayAirQuality.reduce((sum, item) => sum + item.components.no2, 0) / todayAirQuality.length
).toFixed(2);

const avgO3 = (
  todayAirQuality.reduce((sum, item) => sum + item.components.o3, 0) / todayAirQuality.length
).toFixed(2);

const avgPM2_5 = (
  todayAirQuality.reduce((sum, item) => sum + item.components.pm2_5, 0) / todayAirQuality.length
).toFixed(2);

const avgPM10 = (
  todayAirQuality.reduce((sum, item) => sum + item.components.pm10, 0) / todayAirQuality.length
).toFixed(2);


const combinedData = {
  location: "Lodz, Poland",
  date: new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }),
  weather: {
    temperature: currentWeather.main.temp,
    feelsLike: currentWeather.main.feels_like,
    highTemp: highTemp,
    lowTemp: lowTemp,
    description: currentWeather.weather[0].description,
    humidity: currentWeather.main.humidity,
    pressure: currentWeather.main.pressure,
    windSpeed: currentWeather.wind.speed,
    clouds: currentWeather.clouds.all
  },
  airQuality: {
    aqi: avgAQI,
    co: parseFloat(avgCO),
    no2: parseFloat(avgNO2),
    o3: parseFloat(avgO3),
    pm2_5: parseFloat(avgPM2_5),
    pm10: parseFloat(avgPM10),
    note: "Average values for today"
  },
  debug: {
    forecastEntriesForToday: todayForecasts.length,
    airQualityEntriesForToday: todayAirQuality.length
  }
};
return [{
  json: combinedData
}];
