import React from "react";

import ClearDay from "../icons/ClearDay.jsx";
import Cloudy from "../icons/Cloudy.jsx";
import Fog from "../icons/Fog.jsx";
import PartlyCloudyDay from "../icons/PartlyCloudyDay.jsx";
import PartlyCloudyNight from "../icons/PartlyCloudyNight.jsx";
import Rain from "../icons/Rain.jsx";
import Sleet from "../icons/Sleet.jsx";
import Snow from "../icons/Snow.jsx";
import Wind from "../icons/Wind.jsx";

import './timeWeather.scss';

const TimeWeather = () => {
    return (
        <div class="time-weather">
            <div class="time-weather__table">
                <div class="time-weather__body">
                    <div class="time-weather__row">
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <ClearDay />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <Cloudy />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <Fog />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <PartlyCloudyDay />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <PartlyCloudyNight />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <Rain />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <Sleet />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <Wind />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <Snow />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                        <div class="time-weather__cell">
                            <p class="time-weather__time">Time: 12:00 PM</p>
                            <Snow />
                            <p class="time-weather__temp">Temperature: 25°C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TimeWeather;