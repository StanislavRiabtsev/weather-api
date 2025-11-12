import React from "react";
import "../../style/ui/icons.scss";

const ClearDay = ({ size }) => {
    return (
        <svg
            className="clear-day"
            width={size}
            height={size}
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                transform="translate(11 11)"
                stroke="#DFDEED"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="19" cy="19" r="10" />
                <path d="M19 5V0" />
                <path d="M28.9 9.1l3.535-3.535" />
                <path d="M33 19h5" />
                <path d="M28.9 28.9l3.535 3.535" />
                <path d="M19 33v5" />
                <path d="M9.1 28.9l-3.535 3.535" />
                <path d="M5 19H0" />
                <path d="M9.1 9.1L5.566 5.566" />
            </g>
        </svg>
    );
};

export default ClearDay;
