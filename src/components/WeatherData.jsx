import React from 'react';
import { useQuery } from 'react-query';

const fetchWeather = async () => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=d7a12a132bf363c1c0ae7b8df6f2d42c');
    return res.json(); 
}

export default function WeatherData() {
    const { data, status } = useQuery('weather', fetchWeather);

    return (
        <div>
            {status === 'loading' && <div>Loading data</div>}
            {status === 'error' && <div>Error fetching data</div>}
            {status === 'success' && data ? (
                <div>
                    <h1>Weather Data in {data.name}</h1>
                    <h2>Coordinates: {data.coord.lon} {data.coord.lat}</h2>
                    <p>Current temperature is {data.main.temp}&deg;F</p>
                    <p>Humidity is {data.main.humidity}</p>
                    <p>Wind speed is {data.wind.speed}</p>
                    <p>It feels like {data.main.feels_like}&deg;F</p>
                    <p>Pressure {data.main.pressure}</p>
                </div>
            ) : null}
        </div>
    )
}
