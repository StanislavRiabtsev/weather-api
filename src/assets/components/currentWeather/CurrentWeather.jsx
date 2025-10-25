import React, { useState, useEffect, useRef } from "react";
import weatherImg from "../../resources/img/cloudy.png";

import './currentWeather.scss';

const CurrentWeather = () => {

    const [heading, setHeading] = useState(0);
    const compassArrowRef = useRef(null);

    useEffect(() => {

        const handleOrientation = (event) => {
            const alpha = Math.round(event.alpha);
            setHeading(alpha);
            if (compassArrowRef.current) {
                compassArrowRef.current.style.transform = `rotate(${360 - alpha}deg)`;
            }
        };
        if ('ondeviceorientationabsolute' in window) {
            window.addEventListener('deviceorientationabsolute', handleOrientation);
        } else {
            setHeading('Not Supported');
        }
        return () => {
            window.removeEventListener('deviceorientationabsolute', handleOrientation);
        };
    }, []);

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
                    {/* <img src={weatherImg} alt="weatherImg" className="current-weather__img" /> */}
                    <div className="col-xs-2 format">
                        <div className="icon-position" title="Clear Day">
                            <svg id="clear-day" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <title>Clear Day</title>
                                <g>
                                    <path id="cd-sun" d="M49.5,27A22.5,22.5,0,1,1,27,49.5,22.53,22.53,0,0,1,49.5,27m0-5A27.5,27.5,0,1,0,77,49.5,27.5,27.5,0,0,0,49.5,22Z" />
                                    <g id="cd-rays">
                                        <path d="M16.5,52H2.5a2.5,2.5,0,0,1,0-5h14a2.5,2.5,0,0,1,0,5Z" />
                                        <path d="M96.5,52h-14a2.5,2.5,0,0,1,0-5h14a2.5,2.5,0,0,1,0,5Z" />
                                        <path d="M49.5,99A2.5,2.5,0,0,1,47,96.5v-14a2.5,2.5,0,0,1,5,0v14A2.5,2.5,0,0,1,49.5,99Z" />
                                        <path d="M49.5,19A2.5,2.5,0,0,1,47,16.5V2.5a2.5,2.5,0,0,1,5,0v14A2.5,2.5,0,0,1,49.5,19Z" />
                                        <path d="M82.73,85.23A2.49,2.49,0,0,1,81,84.5l-9.9-9.9a2.5,2.5,0,0,1,3.54-3.54L84.5,81a2.5,2.5,0,0,1-1.77,4.27Z" />
                                        <path d="M26.17,28.67a2.49,2.49,0,0,1-1.77-.73L14.5,18A2.5,2.5,0,0,1,18,14.5l9.9,9.9a2.5,2.5,0,0,1-1.77,4.27Z" />
                                        <path d="M72.83,28.67a2.5,2.5,0,0,1-1.77-4.27L81,14.5A2.5,2.5,0,0,1,84.5,18l-9.9,9.9A2.49,2.49,0,0,1,72.83,28.67Z" />
                                        <path d="M16.27,85.23A2.5,2.5,0,0,1,14.5,81l9.9-9.9a2.5,2.5,0,0,1,3.54,3.54L18,84.5A2.49,2.49,0,0,1,16.27,85.23Z" />
                                    </g>
                                </g>
                            </svg></div>
                    </div>
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
                    <h3 className="current-weather__subtitle">Wind</h3>
                    {/* <svg width="300" height="300" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="2" />
                        <text x="50" y="20" textAnchor="middle">N</text>
                        <text x="50" y="90" textAnchor="middle">S</text>
                        <text x="17" y="55" textAnchor="middle">W</text>
                        <text x="85" y="55" textAnchor="middle">E</text>
                        <polygon id="svg-arrow" points="50,30 45,60 55,60" fill="red"
                            transform-origin="50 50" />
                    </svg> */}
                    <article className="tile col-span-1 row-span-2 h-48 flex flex-col justify-center items-center">
                        <svg className="my-4" viewBox="0 0 512 512" style={{ width: '300px', height: '250px' }}>
                            <path d=" M 255.5 0.024 C 255.06 0.105 254.62 0.228 254.221 0.341 L 253.903 0.341 C 115.633 1.702 3.354 113.11 0.632 251.054 L 0.632 251.371 C -0.728 254.201 -0.728 257.495 0.632 260.325 L 0.632 260.653 C 3.027 399.742 116.799 512 256.462 512 L 259.02 512 C 398.365 510.598 511.248 397.511 512.291 258.084 C 512.371 257.449 512.371 256.806 512.291 256.17 L 512.291 254.891 C 512.331 254.466 512.331 254.038 512.291 253.612 C 510.93 114.39 397.966 1.538 258.703 0.341 C 257.661 0.055 256.578 -0.052 255.5 0.024 Z  M 244.315 21.114 C 244.949 21.073 245.594 21.155 246.229 21.114 L 246.229 31.04 C 246.188 34.724 248.111 38.152 251.304 40.035 C 254.507 41.877 258.416 41.877 261.619 40.035 C 264.812 38.152 266.736 34.714 266.695 31.04 L 266.695 21.124 C 388.654 26.333 486.299 123.978 491.508 245.937 L 479.678 245.937 C 474.04 246.449 469.875 251.494 470.397 257.132 C 470.919 262.761 475.953 266.925 481.592 266.404 L 491.508 266.404 C 486.299 388.363 388.654 486.008 266.695 491.216 L 266.695 481.3 C 266.799 478.357 265.63 475.51 263.487 473.49 C 261.343 471.47 258.432 470.471 255.5 470.75 C 255.06 470.832 254.62 470.955 254.221 471.067 C 249.461 472.142 246.118 476.422 246.229 481.3 L 246.229 491.216 C 124.269 486.008 26.624 388.363 21.416 266.404 L 31.332 266.404 C 35.016 266.444 38.444 264.521 40.327 261.328 C 42.165 258.135 42.165 254.205 40.327 251.013 C 38.444 247.82 35.005 245.896 31.332 245.937 L 21.416 245.937 C 26.573 124.623 123.236 27.244 244.315 21.124 L 244.315 21.114 Z " fill="currentColor" />

                            <g ref={compassArrowRef} style={{ transformOrigin: 'center' }}>
                                <path d=" M 248.445 67.683 C 248.279 67.978 248.129 68.282 247.997 68.594 C 247.526 69.592 247.22 70.66 247.092 71.756 L 210.24 254.254 C 210.013 255.45 210.013 256.677 210.24 257.872 L 246.875 440.559 C 247.687 445.167 251.69 448.526 256.369 448.526 C 261.048 448.526 265.051 445.166 265.862 440.559 L 302.498 257.858 C 302.724 256.663 302.724 255.435 302.498 254.24 L 265.638 71.749 C 264.964 68.179 262.335 65.294 258.844 64.29 C 255.352 63.287 251.593 64.336 249.126 67.002 L 248.453 67.675 L 248.445 67.683 Z  M 229.683 256.056 L 283.048 256.049 L 256.362 389.465 L 229.683 256.056 Z " fill="currentColor" />
                            </g>
                        </svg>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;