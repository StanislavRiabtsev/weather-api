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

import "./timeWeather.scss";

const TimeWeather = () => {
    return (
        <div className="time-weather">
            <div className="time-weather__table">
                <div className="time-weather__body">
                    <div className="time-weather__row">

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <ClearDay />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <Cloudy />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <Fog />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <CloudyDay />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <CloudyNight />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <Rain />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <Sleet />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <Wind />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <Snow />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                        <div className="time-weather__cell">
                            <p className="time-weather__time">Time: 12:00 PM</p>
                            <Snow />
                            <p className="time-weather__temp">Temperature: 25°C</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeWeather;
