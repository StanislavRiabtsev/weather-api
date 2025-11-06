import React from "react";

const CloudyNight = ({ size = 75 }) => {
    return (
        <svg
            className="cloudy-night"
            width={size}
            height={size}
            viewBox="0 0 75 75"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath id="clipping--cloudy-night">
                    <path
                        d="M80 0v80H0V0h80zM33 35c-5.523 0-10 4.477-10 10 0 .652.062 1.294.185 1.92a1 1 0 0 1-.81 1.177A6.502 6.502 0 0 0 23.5 61h23a8.5 8.5 0 1 0-2.345-16.672 1 1 0 0 1-1.265-.814C42.166 38.648 37.97 35 33 35z"
                        fill="#D8D8D8"
                    />
                </clipPath>
            </defs>
            <g
                fill="none"
                fillRule="evenodd"
                clipPath="url(#clipping--cloudy-night)"
            >
                <g transform="translate(5 14)">
                    <path
                        d="M28 20c5.52 0 10.09 4.066 10.88 9.366A9.5 9.5 0 1 1 41.5 48h-23a7.5 7.5 0 0 1-1.297-14.888A10.972 10.972 0 0 1 17 31c0-6.075 4.925-11 11-11z"
                        stroke="#DFDEED"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className="cloudy-night--moon"
                        d="M27 20.36c0 10.55 8.552 19.103 19.102 19.103 9.559 0 17.538-7.043 18.898-16.297a19.036 19.036 0 0 1-7.982 1.743c-10.55 0-19.102-8.553-19.102-19.102 0-.946.068-1.884.204-2.807A19.11 19.11 0 0 0 27 20.36z"
                        stroke="#DFDEED"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        className="star"
                        fill="#DFDEED"
                        fillRule="nonzero"
                        cx="57.5"
                        cy="1.5"
                        r="1.5"
                    />
                    <circle
                        className="star"
                        fill="#DFDEED"
                        fillRule="nonzero"
                        cx="6.5"
                        cy="46.5"
                        r="1.5"
                    />
                    <circle
                        className="star"
                        fill="#DFDEED"
                        fillRule="nonzero"
                        cx="68"
                        cy="12"
                        r="2"
                    />
                    <circle
                        className="star"
                        fill="#DFDEED"
                        fillRule="nonzero"
                        cx="1.5"
                        cy="12.5"
                        r="1.5"
                    />
                    <circle
                        className="star"
                        fill="#DFDEED"
                        fillRule="nonzero"
                        cx="7"
                        cy="8"
                        r="1"
                    />
                    <circle
                        className="star"
                        fill="#DFDEED"
                        fillRule="nonzero"
                        cx="67"
                        cy="52"
                        r="1"
                    />
                </g>
            </g>
        </svg>
    );
};

export default CloudyNight;
