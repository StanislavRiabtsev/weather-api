import React from "react";
import "../../style/ui/compass.scss";

const Compass = () => {
    return (
        <div className="logo-area">
            <div className="icon-container">
                <div className="icon">
                    <div className="shadow-point top one triangle"></div>
                    <div className="shadow-point top two triangle"></div>
                    <div className="shadow-point bottom one triangle"></div>
                    <div className="shadow-point bottom two triangle"></div>
                    <div className="shadow-point left one triangle"></div>
                    <div className="shadow-point left two triangle"></div>
                    <div className="shadow-point right one triangle"></div>
                    <div className="shadow-point right two triangle"></div>

                    <div className="outer-rim"></div>
                    <div className="inner-rim"></div>
                    <div className="inner-circle"></div>

                    <div className="big-point top one triangle"></div>
                    <div className="big-point top two triangle"></div>
                    <div className="big-point bottom one triangle"></div>
                    <div className="big-point bottom two triangle"></div>
                    <div className="big-point left one triangle"></div>
                    <div className="big-point left two triangle"></div>
                    <div className="big-point right one triangle"></div>
                    <div className="big-point right two triangle"></div>

                    <div className="small-point top-left one triangle"></div>
                    <div className="small-point top-left two triangle"></div>
                    <div className="small-point top-right one triangle"></div>
                    <div className="small-point top-right two triangle"></div>
                    <div className="small-point bottom-left one triangle"></div>
                    <div className="small-point bottom-left two triangle"></div>
                    <div className="small-point bottom-right one triangle"></div>
                    <div className="small-point bottom-right two triangle"></div>

                    <div className="spinner">
                        <div className="arrow triangle one"></div>
                        <div className="arrow triangle two"></div>
                        <div className="arrow triangle three"></div>
                        <div className="arrow triangle four"></div>
                    </div>

                    <div className="middle-circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Compass;
