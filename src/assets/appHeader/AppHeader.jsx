import React from "react";
import cloud from "../resources/img/cloud.png";

const AppHeader = () => {
    return (
        <header className="app-header">
            <img src={cloud} alt="cloud" />
            <h1>Weather App</h1>
        </header>
    );
};

export default AppHeader;
