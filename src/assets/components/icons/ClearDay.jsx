import React from "react";

import './icons.scss';

const ClearDay = () => {
    return (
        <svg class="clear-day" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(21 21)" stroke="#DFDEED" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
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
    )
}

export default ClearDay;