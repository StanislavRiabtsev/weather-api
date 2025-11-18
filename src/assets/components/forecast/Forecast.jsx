import React, { useState, useEffect } from "react";

import GetWeatherIcon from "../iconMap/IconMap.jsx";
import useWeatherService from "../../services/WeatherService.jsx";

import './forecast.scss';

const Forecast = () => {
    const [days, setDays] = useState([]);
    const { getForecastWeather, setProcess } = useWeatherService();

    useEffect(() => {
        getForecastWeather()
            .then(data => {
                setDays(data);
                setProcess("confirmed");
            })
            .catch(err => console.error("Error loading weather:", err));
    }, []);

    if (days.length === 0)
        return <span className="current-weather__subtitle">Loading...</span>;

    return (
        <div className="forecast">
            <h2 className="forecast__title">Forecast</h2>
            <div className="forecast__wrapper">

                {days.map((day, index) => (
                    <div className="forecast__details" key={index}>
                        <div className="forecast__border">
                            <p className="forecast__day">{day.day}</p>
                            <GetWeatherIcon />
                            <p className="forecast__temp">
                                Temperature: {day.temperature}°C
                            </p>
                            <p className="forecast__condition">
                                Condition: {day.condition}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;

