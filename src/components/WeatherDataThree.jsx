import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WeatherDataThree() {
    const [weatherData, setWeatherData] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=d7a12a132bf363c1c0ae7b8df6f2d42c');
        setWeatherData(response.data);
        }
        fetchWeather();
    }, []);


    return (
        <div>
            {weatherData ? (
                <div>
                    <h1>Weather Data in {weatherData.name}</h1>
                    <h2>Coordinates: {weatherData.coord.lon} {weatherData.coord.lat}</h2>
                    <p>Current temperature is {weatherData.main.temp} &deg;F</p>
                    <p>Humidity is {weatherData.main.humidity}</p>
                    <p>Wind speed is {weatherData.wind.speed}</p>
                    <p>It feels like {weatherData.main.feels_like} &deg;F</p>
                    <p>Pressure {weatherData.main.pressure}</p>
                </div>
            ) : 'loading'}
        </div>
    )
}