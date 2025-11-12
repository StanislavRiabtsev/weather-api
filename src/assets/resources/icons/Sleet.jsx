import React from "react";
import "../../style/ui/icons.scss";

const Sleet = ({ size }) => {
    return (
        <svg
            className="sleet"
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
                <path d="M38 11c5.52 0 10.09 4.066 10.88 9.366A9.5 9.5 0 1 1 51.5 39h-23a7.5 7.5 0 0 1-1.297-14.888A10.972 10.972 0 0 1 27 22c0-6.075 4.925-11 11-11z" />
                <g className="rain--drops">
                    <path d="M31.59 46.407l-2.5 4.33" />
                    <path d="M24.59 58.531l-2.5 4.33" />
                    <path d="M27.09 54.201l-.5.866" />
                    <path d="M50.08 46.113l-2.5 4.33" />
                    <path d="M43.08 58.237l-2.5 4.33" />
                    <path d="M45.58 53.907l-.5.866" />
                    <path d="M40.652 46.443l-2.5 4.33" />
                    <path d="M33.652 58.567l-2.5 4.33" />
                    <path d="M36.152 54.237l-.5.866" />
                </g>
            </g>
        </svg>
    );
};

export default Sleet;
