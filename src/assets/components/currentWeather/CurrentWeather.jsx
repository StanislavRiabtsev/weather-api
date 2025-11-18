import React, { useState, useEffect, useRef } from "react";

import Compass from "../../resources/icons/Compass.jsx"
import GetWeatherIcon from "../iconMap/IconMap.jsx";
import useWeatherService from "../../services/WeatherService.jsx";

import './currentWeather.scss';


const CurrentWeather = (props) => {
    const [weather, setWeather] = useState(null);
    const { process, getPoznanWeather, setProcess } = useWeatherService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getPoznanWeather()
            .then(data => {
                setWeather(data);
                setProcess('confirmed');
            })
            .catch(err => console.error("Error loading weather:", err));
    };

    if (!weather) return <span className="current-weather__subtitle">Loading...</span>;

    return (
        <div className="current-weather">
            <h2 className="current-weather__title">Current Weather</h2>
            <div className="current-weather__wrapper">
                <div className="current-weather__secondary">
                    <h3 className="current-weather__subtitle">About now</h3>
                    <ul className="current-weather__stats">
                        <li className="current-weather__stat">
                            <span>Feels like:</span>
                            <span>{weather.feelslike} °C</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Rain:</span>
                            <span>{weather.rain}%</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Wind speed:</span>
                            <span>{weather.windspeed} km/h</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Humidity:</span>
                            <span>{weather.humidity}%</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Visibility:</span>
                            <span>{weather.visibility} km</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>UV Index:</span>
                            <span>{weather.uvindex}</span>
                        </li>
                    </ul>
                </div>
                <div className="current-weather__primary">
                    <GetWeatherIcon />
                    <p className="current-weather__temperature">
                        Temperature: {weather.temperature} °C
                    </p>
                    <p className="current-weather__condition">
                        Condition: {weather.condition}
                    </p>
                </div>
                <div className="current-weather__secondary">
                    <h3 className="current-weather__subtitle">Wind</h3>
                    <Compass />
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;