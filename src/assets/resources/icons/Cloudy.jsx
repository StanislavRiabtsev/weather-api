import React from "react";
import "../../style/ui/icons.scss";

const Cloudy = ({ size }) => {
    return (
        <svg
            className="cloudy"
            width={size}
            height={size}
            viewBox="0 0 75 75"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath id="clipping">
                    <path
                        d="M80 0v80H0V0h80zM36 27c-5.523 0-10 4.477-10 10 0 .652.062 1.294.185 1.92a1 1 0 0 1-.81 1.177A6.502 6.502 0 0 0 26.5 53h23a8.5 8.5 0 1 0-2.345-16.672 1 1 0 0 1-1.265-.814C45.166 30.648 40.97 27 36 27z"
                        fill="#D8D8D8"
                    />
                </clipPath>
            </defs>

            <g
                fill="none"
                fillRule="evenodd"
                clipPath="url(#clipping)"
            >
                <path
                    d="M36 26c5.52 0 10.09 4.066 10.88 9.366A9.5 9.5 0 1 1 49.5 54h-23a7.5 7.5 0 0 1-1.297-14.888A10.972 10.972 0 0 1 25 37c0-6.075 4.925-11 11-11z"
                    stroke="#DFDEED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className="cloud"
                    d="M19.512 45c2.5 0 4.715 1.221 6.081 3.1a6.17 6.17 0 1 1 2.236 11.924h-8.317a7.512 7.512 0 1 1 0-15.024z"
                    stroke="#DFDEED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    className="cloud"
                    d="M47.268 19c3.75 0 7.073 1.832 9.122 4.65a9.243 9.243 0 0 1 3.354-.626 9.256 9.256 0 1 1 0 18.513H47.268C41.045 41.537 36 36.492 36 30.268 36 24.045 41.045 19 47.268 19z"
                    stroke="#DFDEED"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

export default Cloudy;
