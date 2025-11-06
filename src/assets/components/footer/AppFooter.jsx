import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareGithub, faSquareInstagram, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

import './appFooter.scss'

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__top">
                    <div className="footer__left">
                        <p className="footer__p2">Connect people with opportunities that bring more fulfillment to their lives.</p>
                        <div className="footer__socials">
                            <a href="#" className="footer__icon w-inline-block">
                                <FontAwesomeIcon icon={faSquareFacebook} className="footer__icon-facebook" />
                            </a>
                            <a href="#" className="footer__icon w-inline-block">
                                <FontAwesomeIcon icon={faSquareGithub} className="footer__icon-github" />
                            </a>
                            <a href="#" className="footer__icon w-inline-block">
                                <FontAwesomeIcon icon={faSquareInstagram} className="footer__icon-instagram" />
                            </a>
                            <a href="#" className="footer__icon w-inline-block">
                                <FontAwesomeIcon icon={faSquareLinkedin} className="footer__icon-linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom-content">
                        <div className="text-size-small is-grey">© 2025 Weather App. All rights reserved.</div>
                        <div className="footer__bottom-right">
                            <a href="#" className="footer__bottom-link">Terms</a>
                            <a href="#" className="footer__bottom-link">Privacy</a>
                            <a href="#" className="footer__bottom-link">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;