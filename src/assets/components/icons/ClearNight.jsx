import React from "react";

const ClearNight = ({ size }) => {
    return (
        <svg class="clear-night"
            width={size}
            height={size}
            viewBox="0 0 75 75"
            xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(5 14)" fill="none" fill-rule="evenodd">
                <path d="M19 25.36c0 10.55 8.552 19.103 19.102 19.103 9.559 0 17.538-7.043 18.898-16.297a19.036 19.036 0 0 1-7.982 1.743c-10.55 0-19.102-8.553-19.102-19.102 0-.946.068-1.884.204-2.807A19.11 19.11 0 0 0 19 25.36z" stroke="#DFDEED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <circle class="star" fill="#DFDEED" fill-rule="nonzero" cx="57.5" cy="1.5" r="1.5" />
                <circle class="star" fill="#DFDEED" fill-rule="nonzero" cx="17.5" cy="43.5" r="1.5" />
                <circle class="star" fill="#DFDEED" fill-rule="nonzero" cx="68" cy="12" r="2" />
                <circle class="star" fill="#DFDEED" fill-rule="nonzero" cx="1.5" cy="12.5" r="1.5" />
                <circle class="star" fill="#DFDEED" fill-rule="nonzero" cx="7" cy="8" r="1" />
                <circle class="star" fill="#DFDEED" fill-rule="nonzero" cx="67" cy="52" r="1" />
            </g>
        </svg>
    )
}

export default ClearNight;