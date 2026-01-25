# iit-Final_project
iit final project about gathering data information from the weather forecast daily and recommend appropriate clothing based on the data

## Data Sources
Based on our research, we selected these APIs to ensure global functionality:

* **Geocoding:** [Nominatim API (OpenStreetMap)](https://nominatim.org/)
    * *Why:* It's free and open-source. Also allows converting any city name into coordinates which are required by weather services.
* **Weather Data:** [Open-Meteo API](https://open-meteo.com/)
    * *Why:* It provides accurate forecast data globally without requiring an API key for non-commercial use. It integrates with the coordinates provided by Nominatim.
