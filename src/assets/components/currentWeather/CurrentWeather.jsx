import React, { useState, useEffect } from "react";
import Compass from "../../resources/icons/Compass.jsx";
import GetWeatherIcon from "../iconMap/IconMap.jsx";
import useWeatherService from "../../services/WeatherService.jsx";
import { useTranslation } from 'react-i18next';
import { translateCondition } from "../translate/TranslateCondition.jsx";
import './currentWeather.scss';

const CurrentWeather = () => {
    const { t, i18n } = useTranslation();
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

    if (!weather) return <span className="current-weather__subtitle">{t('loading')}</span>;

    return (
        <div className="current-weather">
            <h2 className="current-weather__title">{t('current')}</h2>

            <div className="current-weather__wrapper">

                <div className="current-weather__secondary current-weather__secondary--stats">
                    <h3 className="current-weather__subtitle">{t('about')}</h3>
                    <ul className="current-weather__stats">
                        <li className="current-weather__stat">
                            <span>{t('feel')}:</span>
                            <span>{weather.feelslike} °C</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>{t('rain')}:</span>
                            <span>{weather.rain}%</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>{t('windspeed')}:</span>
                            <span>{weather.windspeed} {t('kmh')}</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>{t('humidity')}:</span>
                            <span>{weather.humidity}%</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>{t('visibility')}:</span>
                            <span>{weather.visibility} {t('km')}</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>{t('index')}:</span>
                            <span>{weather.uvindex}</span>
                        </li>
                    </ul>
                </div>

                <div className="current-weather__primary">
                    <GetWeatherIcon />
                    <p className="current-weather__temperature">
                        {t('temperature')}: {weather.temperature} °C
                    </p>
                    <p className="current-weather__condition">
                        {t('condition')}: {translateCondition(weather.condition, i18n.language)}
                    </p>
                </div>

                <div className="current-weather__secondary current-weather__secondary--wind">
                    <h3 className="current-weather__subtitle">{t('wind')}</h3>
                    <Compass />
                </div>

            </div>
        </div>
    );
}

export default CurrentWeather;
