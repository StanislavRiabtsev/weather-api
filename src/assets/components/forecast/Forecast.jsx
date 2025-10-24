import React from "react";
import weatherImg from "../../resources/img/cloudy.png";


import './forecast.scss';

const Forecast = () => {
    return (
        <div className="forecast">
            <h2 className="forecast__title">Forecast</h2>
            <div className="forecast__wrapper">
                <div className="forecast__details">
                    <div className="forecast__border">
                        <img src={weatherImg} alt="weatherImg" className="forecast__img" />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <img src={weatherImg} alt="" className="forecast__img" />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <img src={weatherImg} alt="" className="forecast__img" />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <img src={weatherImg} alt="" className="forecast__img" />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <img src={weatherImg} alt="" className="forecast__img" />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <img src={weatherImg} alt="" className="forecast__img" />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
                <div className="forecast__details">
                    <div className="forecast__border">
                        <img src={weatherImg} alt="" className="forecast__img" />
                        <p className="forecast__temp">Temperature: 25°C</p>
                        <p className="forecast__condition">Condition: Sunny</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
