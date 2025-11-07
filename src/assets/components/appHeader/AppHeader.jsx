import React from "react";
import cloud from "../../resources/img/cloud.png";

import "./appHeader.scss";

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <img src={cloud} alt="cloud" className="header__img" />
                <h1 className="header__title">Weather App</h1>
            </div>
            <div className="header__languages">
                <button data-language="english">ENGLISH</button>
                <button data-language="italian">POLSKI</button>
                <button data-language="spanish">УКРАЇНСЬКА</button>
            </div>
        </header>
    );
};

export default AppHeader;
