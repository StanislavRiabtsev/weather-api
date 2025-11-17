import React from "react";

import ClearDay from "../../resources/icons/ClearDay.jsx";
import Cloudy from "../../resources/icons/Cloudy.jsx";
import Fog from "../../resources/icons/Fog.jsx";
import CloudyDay from "../../resources/icons/CloudyDay.jsx";
import CloudyNight from "../../resources/icons/CloudyNight.jsx";
import Rain from "../../resources/icons/Rain.jsx";
import Sleet from "../../resources/icons/Sleet.jsx";
import Snow from "../../resources/icons/Snow.jsx";
import Wind from "../../resources/icons/Wind.jsx";

import './forecast.scss';

const Forecast = () => {
    return (
        <div className="forecast">
            <h2 className="forecast__title">Forecast</h2>
            <div className="forecast__wrapper">
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday 06.11</p>
                        <ClearDay />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday 06.11</p>
                        <ClearDay />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday 06.11</p>
                        <ClearDay />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday 06.11</p>
                        <ClearDay />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday 06.11</p>
                        <ClearDay />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday 06.11</p>
                        <ClearDay />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <p className="forecast__day">Monday 06.11</p>
                        <ClearDay />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
