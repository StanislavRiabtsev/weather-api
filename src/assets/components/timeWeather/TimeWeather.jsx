import React, { useState, useEffect } from "react";

import GetWeatherIcon from "../iconMap/IconMap.jsx";
import useWeatherService from "../../services/WeatherService.jsx";
import { useTranslation } from 'react-i18next';

import "./timeWeather.scss";

const TimeWeather = () => {

    const { t } = useTranslation();
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
        return <span className="current-weather__subtitle">{t('loading')}</span>;

    return (
        <div className="time-weather">
            <div className="time-weather__table">
                <div className="time-weather__body">
                    <div className="time-weather__row">

                        {hours.map((hour, index) => (
                            <div key={index} className="time-weather__cell">
                                <p className="time-weather__time">
                                    {t('time')}: {hour.time}
                                </p>
                                <GetWeatherIcon />
                                <p className="time-weather__temp">
                                    {t('temperature')}: {hour.temperature}°C
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
