import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

import './appFooter.scss'

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__top">
                    <div className="footer__left">
                        <p className="footer__p2">Connect people with opportunities that bring more fulfillment to their lives.</p>
                        <div className="footer__socials">
                            <a href="#" className="footer__icon-wrap w-inline-block">
                                <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />
                            </a>
                            <a href="#" className="footer__icon-wrap w-inline-block">
                                <img sizes="(max-width: 512px) 100vw, 512px" srcset="https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d56abd92ebf2c6d0ef_twitter%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d56abd92ebf2c6d0ef_twitter%20(1).png 512w" alt="" src="https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d56abd92ebf2c6d0ef_twitter%20(1).png" loading="lazy" />
                            </a>
                            <a href="#" className="footer__icon-wrap w-inline-block">
                                <img sizes="(max-width: 512px) 100vw, 512px" srcset="https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d503cc2e28c437e678_instagram-p-500.png 500w, https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d503cc2e28c437e678_instagram.png 512w" alt="" src="https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d503cc2e28c437e678_instagram.png" loading="lazy" />
                            </a>
                            <a href="#" className="footer__icon-wrap w-inline-block">
                                <img sizes="(max-width: 512px) 100vw, 512px" srcset="https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d5e6c9fd615bedbda9_linkedin%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d5e6c9fd615bedbda9_linkedin%20(1).png 512w" alt="" src="https://cdn.prod.website-files.com/67beada33f2e46a263cc2ff2/67beb1d5e6c9fd615bedbda9_linkedin%20(1).png" loading="lazy" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__links-wrap">
                            <a href="#" className="footer__link">Careers</a>
                            <a href="#" className="footer__link">Press &amp; media</a>
                            <a href="#" className="footer__link">Browse jobs</a>
                            <a href="#" className="footer__link">Employer support</a>
                            <a href="#" className="footer__link">Pricing plans</a>
                            <a href="#" className="footer__link">FAQs</a>
                        </div>
                        <div className="footer__links-wrap">
                            <a href="#" className="footer__link">About us</a>
                            <a href="#" className="footer__link">Contact us</a>
                            <a href="#" className="footer__link">Post a job</a>
                            <a href="#" className="footer__link">Job alerts</a>
                            <a href="#" className="footer__link">Our mission</a>
                            <a href="#" claclassNamess="footer__link">Help center</a>
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