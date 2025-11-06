import React from "react";

const Fog = ({ size }) => {
    return (
        <svg
            className="fog"
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
                <path d="M20.5 42a7.498 7.498 0 0 1 4.703-2.888A10.972 10.972 0 0 1 25 37c0-6.075 4.925-11 11-11 5.52 0 10.09 4.066 10.88 9.366A9.487 9.487 0 0 1 49.5 35c4.382 0 8.07 2.966 9.168 7" />
                <path className="fog-line" d="M20 54h25" />
                <path className="fog-line" d="M49 54h13" />
                <path className="fog-line" d="M18 50h41" />
                <path className="fog-line" d="M20 46h17" />
                <path className="fog-line" d="M41 46h20" />
            </g>
        </svg>
    );
};

export default Fog;
