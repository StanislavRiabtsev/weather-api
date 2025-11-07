import React from "react";

import ClearDay from "../icons/ClearDay.jsx";
import ClearNight from "../icons/ClearNight.jsx";
import Cloudy from "../icons/Cloudy.jsx";
import CloudyDay from "../icons/CloudyDay.jsx";
import CloudyNight from "../icons/CloudyNight.jsx";
import Fog from "../icons/Fog.jsx";
import Rain from "../icons/Rain.jsx";
import Sleet from "../icons/Sleet.jsx";
import Snow from "../icons/Snow.jsx";
import Thuderstorm from "../icons/Thunderstorm.jsx"
import Wind from "../icons/Wind.jsx";


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
