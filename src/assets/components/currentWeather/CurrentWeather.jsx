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

    if (!weather) return <p>Loading...</p>;

    return (
        <div className="current-weather">
            <h2 className="current-weather__title">Current Weather</h2>
            <div className="current-weather__wrapper">
                <div className="current-weather__secondary">
                    <h3 className="current-weather__subtitle">About now</h3>
                    <ul className="current-weather__stats">
                        <li className="current-weather__stat">
                            <span>Feels like:</span>
                            <span>{weather.feelslike}</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Rain:</span>
                            <span>20%</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Wind speed:</span>
                            <span>{weather.windspeed}</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Humidity:</span>
                            <span>{weather.humidity}</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Visibility:</span>
                            <span>{weather.visibility}</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>UV Index:</span>
                            <span>{weather.uvindex}</span>
                        </li>
                    </ul>
                </div>
                <div className="current-weather__primary">
                    {/* <ClearDay /> */}
                    {/* <ClearNight /> */}
                    {/* <Cloudy /> */}
                    {/* <CloudyDay /> */}
                    {/* <CloudyNight /> */}
                    {/* <Rain /> */}
                    {/* <Sleet /> */}
                    {/* <Snow /> */}
                    {/* <Thuderstorm /> */}
                    <Wind />
                    {/* <Fog /> */}
                    <p className="current-weather__temperature">
                        Temperature: 22°C
                    </p>
                    <p className="current-weather__condition">
                        Condition:
                        Partly Cloudy
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