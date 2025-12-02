import React, { useState, useEffect } from "react";

import GetWeatherIcon from "../iconMap/IconMap.jsx";
import useWeatherService from "../../services/WeatherService.jsx";
import { useTranslation } from 'react-i18next';
import { translateDay } from "../translate/TranslateDay.jsx";
import { translateCondition } from "../translate/TranslateCondition.jsx";

import './forecast.scss';

const Forecast = () => {
    const { t, i18n } = useTranslation();
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
        return <span className="current-weather__subtitle">{t('loading')}</span>;

    return (
        <div className="forecast">
            <h2 className="forecast__title">{t('forecast')}</h2>
            <div className="forecast__wrapper">

                {days.map((day, index) => (
                    <div className="forecast__details" key={index}>
                        <div className="forecast__border">
                            <p className="forecast__day">{translateDay(day.day, i18n.language)}</p>
                            <GetWeatherIcon />
                            <p className="forecast__temp">
                                {t('temperature')}: {day.temperature}°C
                            </p>
                            <p className="forecast__condition">
                                {t('condition')}: {translateCondition(day.condition, i18n.language)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;

