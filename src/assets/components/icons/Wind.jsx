import React from "react";

const Wind = () => {
    return (
        <svg class="wind" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#DFDEED" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <path class="wind-1" d="M57 22a7 7 0 0 1 0 14H28" />
                <path class="wind-1" d="M49 56a7 7 0 0 0 0-14H16" />
                <path class="wind-2" d="M22 30h30" />
                <path class="wind-2" d="M22 48h17a5 5 0 0 1 0 10" />
            </g>
        </svg>
    )
}

export default Wind;