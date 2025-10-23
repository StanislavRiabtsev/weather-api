import React from "react";
import cloud from "../resources/img/cloud.png";

import "./appHeader.scss";

const AppHeader = () => {
    return (
        <header className="header">
            <img src={cloud} alt="cloud" className="header__img" />
            <h1 className="header__title">Weather App</h1>
        </header>
    );
};

export default AppHeader;
