import React, { useState, useEffect, useRef } from "react";

import Compass from "../../resources/icons/Compass.jsx";
import ClearDay from "../../resources/icons/ClearDay.jsx";
import ClearNight from "../../resources/icons/ClearNight.jsx";
import Cloudy from "../../resources/icons/Cloudy.jsx";
import CloudyDay from "../../resources/icons/CloudyDay.jsx";
import CloudyNight from "../../resources/icons/CloudyNight.jsx";
import Fog from "../../resources/icons/Fog.jsx";
import Rain from "../../resources/icons/Rain.jsx";
import Sleet from "../../resources/icons/Sleet.jsx";
import Snow from "../../resources/icons/Snow.jsx";
import Thuderstorm from "../../resources/icons/Thunderstorm.jsx"
import Wind from "../../resources/icons/Wind.jsx";

import useWeatherService from "../../services/WeatherService.jsx";

import './currentWeather.scss';

const iconMap = {
    "Clear": <ClearDay />,
    "Clear day": <ClearDay />,
    "Clear night": <ClearNight />,
    "Partially cloudy": <CloudyDay />,
    "Partly cloudy": <CloudyDay />,
    "Cloudy": <Cloudy />,
    "Overcast": <Cloudy />,
    "Rain": <Rain />,
    "Rain, Partially cloudy": <Rain />,
    "Rain, Overcast": <Rain />,
    "Fog": <Fog />,
    "Snow": <Snow />,
    "Sleet": <Sleet />,
    "Thunderstorm": <Thuderstorm />,
    "Wind": <Wind />,
};

const getWeatherIcon = (condition) => {
    return iconMap[condition] || <Cloudy />;
};

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
                    {getWeatherIcon(weather.condition)}
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