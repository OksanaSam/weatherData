import { useEffect, useState } from 'react';

export default function WeatherDataTwo() {
    const initialUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=d7a12a132bf363c1c0ae7b8df6f2d42c';
    const [weatherData, setWeatherData] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        const fetchWeather = async () => {
            const res = await fetch(url);
            const parsed = await res.json();
            setWeatherData(parsed);
            setUrl(null);
        }
        if (url) {
            fetchWeather();
        }
    }, [url]);

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
            ) : null}
        </div>
    )
}