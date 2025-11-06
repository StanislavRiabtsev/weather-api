import React from "react";

const Wind = ({ size }) => {
    return (
        <svg
            className="wind"
            width={size}
            height={size}
            viewBox="0 0 75 75"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke="#DFDEED"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path className="wind-1" d="M57 22a7 7 0 0 1 0 14H28" />
                <path className="wind-1" d="M49 56a7 7 0 0 0 0-14H16" />
                <path className="wind-2" d="M22 30h30" />
                <path className="wind-2" d="M22 48h17a5 5 0 0 1 0 10" />
            </g>
        </svg>
    );
};

export default Wind;
