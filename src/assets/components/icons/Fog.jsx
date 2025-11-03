import React from "react";

const Fog = () => {
    return (
        <svg class="fog" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#DFDEED" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.5 42a7.498 7.498 0 0 1 4.703-2.888A10.972 10.972 0 0 1 25 37c0-6.075 4.925-11 11-11 5.52 0 10.09 4.066 10.88 9.366A9.487 9.487 0 0 1 49.5 35c4.382 0 8.07 2.966 9.168 7" />
                <path class="fog-line" d="M20 54h25" />
                <path class="fog-line" d="M49 54h13" />
                <path class="fog-line" d="M18 50h41" />
                <path class="fog-line" d="M20 46h17" />
                <path class="fog-line" d="M41 46h20" />
            </g>
        </svg>
    )
}

export default Fog;