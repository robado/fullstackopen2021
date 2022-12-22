import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null);
    const apikey = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${apikey}&units=metric`)
            .then(response => {
                setWeather(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [country])

    
    if (!weather) {
        return null
    }

    var weatherImgURL = weather.weather[0].icon

    return (
        <div>
            <h2>Weather in {country.capital[0]}</h2>
            <p>Temperature {weather.main.temp} Celcius</p>
            <img src={`http://openweathermap.org/img/wn/${weatherImgURL}@2x.png`} />
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather