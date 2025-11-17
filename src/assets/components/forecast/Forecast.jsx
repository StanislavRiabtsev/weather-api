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

import './forecast.scss';

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


const Forecast = (props) => {

    const [days, setDays] = useState();
    const { process, getForecastWeather, setProcess } = useWeatherService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getForecastWeather()
            .then(data => {
                setDays(data);
                setProcess('confirmed');
            })
            .catch(err => console.error("Error loading weather:", err));
    };

    if (!days) return <span className="current-weather__subtitle">Loading...</span>;

    return (
        <div className="forecast">
            <h2 className="forecast__title">Forecast</h2>
            <div className="forecast__wrapper">
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday {days.day}</p>
                        {getWeatherIcon(days.condition)}
                        <p className="forecast__temp">Temperature: {days.temperature}°C</p>
                        <p className="forecast__condition">Condition: {days.condition}</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday {days.day}</p>
                        {getWeatherIcon(days.condition)}
                        <p className="forecast__temp">Temperature: {days.temperature}°C</p>
                        <p className="forecast__condition">Condition: {days.condition}</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday {days.day}</p>
                        {getWeatherIcon(days.condition)}
                        <p className="forecast__temp">Temperature: {days.temperature}°C</p>
                        <p className="forecast__condition">Condition: {days.condition}</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday {days.day}</p>
                        {getWeatherIcon(days.condition)}
                        <p className="forecast__temp">Temperature: {days.temperature}°C</p>
                        <p className="forecast__condition">Condition: {days.condition}</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday {days.day}</p>
                        {getWeatherIcon(days.condition)}
                        <p className="forecast__temp">Temperature: {days.temperature}°C</p>
                        <p className="forecast__condition">Condition: {days.condition}</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday {days.day}</p>
                        {getWeatherIcon(days.condition)}
                        <p className="forecast__temp">Temperature: {days.temperature}°C</p>
                        <p className="forecast__condition">Condition: {days.condition}</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday {days.day}</p>
                        {getWeatherIcon(days.condition)}
                        <p className="forecast__temp">Temperature: {days.temperature}°C</p>
                        <p className="forecast__condition">Condition: {days.condition}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
