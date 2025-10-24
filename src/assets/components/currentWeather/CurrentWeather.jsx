import React from "react";
import weatherImg from "../../resources/img/cloudy.png";

import './currentWeather.scss';

const CurrentWeather = () => {
    return (
        <div className="current-weather">
            <h2 className="current-weather__title">Current Weather</h2>
            <div className="current-weather__wrapper">
                <div className="current-weather__secondary">
                    <h3 className="current-weather__subtitle">About now</h3>
                    <ul className="current-weather__stats">
                        <li className="current-weather__stat">
                            <span>Feels like:</span>
                            <span>10°C</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Rain:</span>
                            <span>20%</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Wind speed:</span>
                            <span>10 km/h</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Humidity:</span>
                            <span>50%</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>Visibility:</span>
                            <span>10 km</span>
                        </li>
                        <li className="current-weather__stat">
                            <span>UV Index:</span>
                            <span>5</span>
                        </li>
                    </ul>
                </div>
                <div className="current-weather__primary">
                    <img src={weatherImg} alt="weatherImg" className="current-weather__img" />
                    <p className="current-weather__temperature">
                        Temperature:
                        <span className="current-weather__temp-value current-weather__temp-value--hot">22°C</span>
                    </p>
                    <p className="current-weather__condition">
                        Condition:
                        <span className="current-weather__condition-text">Partly Cloudy</span>
                    </p>
                </div>
                <div className="current-weather__secondary">
                    <h3 className="current-weather__subtitle">Tomorrow</h3>
                    <img src={weatherImg} alt="weatherImg" className="current-weather__img" />
                    <p className="current-weather__temperature">
                        Temperature:
                        <span className="current-weather__temp-value current-weather__temp-value--cold">15°C</span>
                    </p>
                    <p className="current-weather__condition">
                        Condition:
                        <span className="current-weather__condition-text">Rainy</span>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default CurrentWeather;