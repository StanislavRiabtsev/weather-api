import React, { useState, useEffect } from "react";

import useWeatherService from "../../services/WeatherService.jsx";

import ClearDay from "../../resources/icons/ClearDay.jsx";
import ClearNight from "../../resources/icons/ClearNight.jsx";
import Cloudy from "../../resources/icons/Cloudy.jsx";
import CloudyDay from "../../resources/icons/CloudyDay.jsx";
import CloudyNight from "../../resources/icons/CloudyNight.jsx";
import Fog from "../../resources/icons/Fog.jsx";
import Rain from "../../resources/icons/Rain.jsx";
import Sleet from "../../resources/icons/Sleet.jsx";
import Snow from "../../resources/icons/Snow.jsx";
import Thuderstorm from "../../resources/icons/Thunderstorm.jsx";
import Wind from "../../resources/icons/Wind.jsx";

import "./timeWeather.scss";

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

const TimeWeather = () => {

    const [hours, setHours] = useState([]);
    const { getTimeWeather, setProcess } = useWeatherService();

    useEffect(() => {
        getTimeWeather()
            .then(data => {
                setHours(data);
                setProcess("confirmed");
            })
            .catch(err => console.error("Error loading weather:", err));
    }, []);

    if (hours.length === 0)
        return <span className="current-weather__subtitle">Loading...</span>;

    return (
        <div className="time-weather">
            <div className="time-weather__table">
                <div className="time-weather__body">
                    <div className="time-weather__row">

                        {hours.map((hour, index) => (
                            <div key={index} className="time-weather__cell">

                                <p className="time-weather__time">
                                    Time: {hour.time}
                                </p>

                                {getWeatherIcon(hour.condition)}

                                <p className="time-weather__temp">
                                    Temperature: {hour.temperature}°C
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeWeather;
