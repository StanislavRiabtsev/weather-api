import React from "react";
import cloud from "../../resources/img/cloud.png";
import { useTranslation } from 'react-i18next';

import "./appHeader.scss";

const AppHeader = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <header className="header">
            <div className="header__wrapper">
                <img src={cloud} alt="cloud" className="header__img" />
                <h1 className="header__title">Weather App</h1>
            </div>
            <div className="header__languages">
                <button
                    data-language="english"
                    className="header__languages-btn"
                    onClick={() => changeLanguage('en')}>ENGLISH</button>

                <button
                    data-language="polish"
                    className="header__languages-btn"
                    onClick={() => changeLanguage('pl')}>POLSKI</button>

                <button
                    data-language="ukranian"
                    className="header__languages-btn"
                    onClick={() => changeLanguage('ukr')}>УКРАЇНСЬКА</button>

                <button
                    data-language="english"
                    className="header__languages-btn-phone"
                    onClick={() => changeLanguage('en')}>EN</button>

                <button
                    data-language="polish"
                    className="header__languages-btn-phone"
                    onClick={() => changeLanguage('pl')}>PL</button>

                <button
                    data-language="ukranian"
                    className="header__languages-btn-phone"
                    onClick={() => changeLanguage('ukr')}>УКР</button>
            </div>
        </header>
    );
};

export default AppHeader;
