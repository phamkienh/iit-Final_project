# iit-Final_project
iit final project about gathering data information from the weather forecast daily and recommend appropriate clothing based on the data

## Data Sources and Tools
Based on our research, we selected these APIs and tools to ensure global functionality:

* **Geocoding:** [Nominatim API (OpenStreetMap)](https://nominatim.org/)
    * *Why:* It's free and open-source. Also allows converting any city name into coordinates which are required by weather services.
* **Weather Data:** [Open-Meteo API](https://open-meteo.com/)
    * *Why:* It provides accurate forecast data globally without requiring an API key for non-commercial use. It integrates with the coordinates provided by Nominatim.
* **WeatherAPI:** [Weather API](https://www.weatherapi.com/)
    * *Why:* Combines weather and air quality data in a single API with real-time updates, forecasts, and comprehensive pollutant information for over 300,000 locations worldwide.
* **Weather & Air Pollution:** [OpenWeatherMap API](https://openweathermap.org/)
    * *Why:* Utilized in the workflow to fetch 5-day weather forecasts and detailed air quality metrics (PM2.5, PM10, CO, NO2, O3) which are essential for the health impact analysis.
* **NOAA & AirQuality:** [NOAA & Air quality](https://airquality.weather.gov/?element=ozone01_bc&mapcenter=-108.59%2C44.62&mapzoom=6&subregion=CONUS&region=CONUS)
     * *why:* Provides official U.S. government air quality data and forecasts with comprehensive pollutant measurements. Offers detailed visualizations and historical data for comparison with other sources.
* **Visual Crossing:** [Visual Crossing](https://www.visualcrossing.com/)
   * *why:* Offers extensive historical weather data and forecasts with flexible query options, ideal for analyzing long-term weather patterns and trends alongside current conditions.
<br><br>
## For automation
* **Groq:** [Groq API](https://groq.com/)
    * *Why:* It is currently the fastest AI platform, allowing for instant response generation.
* **Automation:** [n8n](https://n8n.io/)
    * *Why:* The workflow engine used to orchestrate the data fetching, processing, AI generation, and email scheduling.
