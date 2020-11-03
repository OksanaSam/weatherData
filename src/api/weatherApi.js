export const fetchWeather = async () => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=d7a12a132bf363c1c0ae7b8df6f2d42c');
    return res.json(); 
}